import Layout from '../../comps/_Layout.js'
import MonHeader from '../../comps/MonHeader.js'
import Sidebar from '../../comps/Sidebar.js'
import Content from '../../comps/SplitContent.js'
import FormActions from '../../comps/FormActions.js'
import { SideHeader, MainHeader } from '../../comps/SubHeader.js'

import fetch from 'isomorphic-unfetch'

const Icon = {
    hlIcon: '/static/ContentIcons/Hunt_Log_Icon.png',
    hbIcon: '/static/ContentIcons/Hunt_Bill_Icon.png',
    fateIcon: '/static/ContentIcons/Fate_Icon.png',
    atmaIcon: '/static/ContentIcons/Atma_Book_Icon.png'
}

const pStyle = {
    marginTop: '6px'
}

export default class extends FormActions {

    constructor() {
        super()
        this.state = {}
    }

    static async getInitialProps ({ query }) {
        const id = query.id
        return { id }
    }

    componentDidMount() {
        this.getMon();
    }
    
    getMon = () => {
        fetch(`http://localhost:3000/api/${this.props.id}`)
            .then(response => response.json())
            .then(response => this.setState({ monster: response.data }) )
            .catch((error) => {
                console.log(`Error in getting Monster ID ${this.props.id}: ${error}`)
            })
    };

    render(){
        const monster = this.state.monster

        if(!monster){
            return(
                <></>
            )
        }
        return (
            <Layout>
                <MonHeader name={monster.name} hasIcon={false} aggro={monster.aggro} patch={monster.version} />
                <Sidebar>
                    <span>Level: {monster.level}</span><br/>
                    <SideHeader title="Hunting Log" icon={Icon.hlIcon} />
                    <p style={pStyle}>This section should only display for monsters that are in the Hunting Log.</p>
                    <SideHeader title="The Hunt" icon={Icon.hbIcon} />
                    <p style={pStyle}>This section should only display if the monster is a mark for The Hunt.</p>
                </Sidebar>
                <Content>
                    <MainHeader title="Details" />
                    <span>Type: {monster.type}</span><br/>
                    <span>Rarity: {monster.rarity}</span><br/>
                    <span>HP: {monster.hp}</span><br/>
                    <MainHeader title="Location" />
                    <span>Some Map Somewhere, I'm Sure.</span>
                    <MainHeader title="See Also" />
                    <p style={pStyle}>This section should link related pages, 
                    such as a listing of monsters of the same type, a page that displays 
                    related targets for Hunting Logs, etc.</p>
                </Content>
            </Layout>
        )
    }
}