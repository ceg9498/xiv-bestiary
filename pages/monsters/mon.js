import Layout from '../../comps/_Layout.js'
import MonHeader from '../../comps/MonHeader.js'
import Sidebar from '../../comps/Sidebar.js'
import Content from '../../comps/SplitContent.js'
import FormActions from '../../comps/FormActions.js'
import fetch from 'isomorphic-unfetch'

export default class extends FormActions {

    constructor() {
        super()
        this.state = {}
    }

    static async getInitialProps ({ query }) {
        const webname = query.webname
        return { webname }
    }

    componentDidMount() {
        this.getDataFromDb();
    }

    async getDataFromDb() {
        const res = await fetch('http://localhost:3000/api')
        const data = await res.json()
        let monster = ''
        for(var i = 0; i < data.length; i++){
            if(data[i].webname === this.props.webname){
                monster = data[i]
            }
        }
        //console.log('getData\'s monster', monster)
        this.setState({monster: monster})
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
                <MonHeader title={monster.name} image="/static/monIcon_generic.png" aggro={monster.aggro} />
                <Sidebar>
                    <span>Level: {monster.level}</span>
                </Sidebar>
                <Content>
                    <span>{monster.type}</span><br/>
                    <span>{monster.rarity}</span><br/>
                    <span>{monster.hp}</span><br/>
                </Content>
            </Layout>
        )
    }
}