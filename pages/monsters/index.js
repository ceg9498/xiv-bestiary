import Layout from '../../comps/_Layout.js'
import FormActions from '../../comps/FormActions.js'
import Content from '../../comps/FullContent.js'
import MonList from "../../comps/MonList.js"
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const linkStyle = {
  color: 'black',
  fontFamily: 'Arial, Sans-serif',
  marginLeft: '10px',
  marginRight: '10px'
}

const Pages = props => (
    <div>
        {props.pagination.Page > 1 &&
        <Link href={`/monsters?page=${props.pagination.PagePrev}`}>
            <a style={linkStyle}>Previous Page</a>
        </Link>
        }

        <span style={linkStyle}>{props.pagination.Page}</span>

        {props.pagination.Page < props.pagination.PageTotal &&
        <Link href={`/monsters?page=${props.pagination.PageNext}`}>
            <a style={linkStyle}>Next Page</a>
        </Link>
        }
    </div>
)

export default class extends FormActions {

    constructor() {
        super()
        this.state = {}
    }

    static async getInitialProps ({ query }) {
        let page = query.page
        return { page }
    }

    componentDidMount() {
        this.getList()
    }

    componentDidUpdate(prevProps) {
        if(this.props.page !== prevProps.page){
            this.getList();
        }
    }

    getList = () => {
        fetch(`http://localhost:3000/api/list/${this.props.page}`)
            .then(response => response.json())
            .then(res => this.setState({
                list: res.data,
                pagination: res.pagination
            }) )
            .catch((error) => {
                console.log(`Error in Get List: ${error}`)
            })
    }

    render(){
        const list = this.state.list

        if(!list){
            return(
                <></>
            )
        }
        return (
            <Layout>
              <Content>
                <Pages pagination={this.state.pagination} />
                <MonList list={list} inst={this} />
              </Content>
            </Layout>
        )
    }
}