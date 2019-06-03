import Layout from '../../comps/_Layout.js'
import FormActions from '../../comps/FormActions.js'
import Content from '../../comps/FullContent.js'
import MonList from "../../comps/MonList.js"
import fetch from 'isomorphic-unfetch'

export default class extends FormActions {

    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        this.getDataFromDb();
    }

    async getDataFromDb() {
        const res = await fetch('http://localhost:3000/api')
        const data = await res.json()
        
        this.setState({list: data})
    };
    
    render(){
        const list = this.state.list
        return (
            <Layout>
              <Content>
                <MonList list={list} inst={this} />
              </Content>
            </Layout>
        )
    }
}