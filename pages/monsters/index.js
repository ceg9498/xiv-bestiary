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
        <Link href={`/monsters?page=${props.pagination.PagePrev}`}>
            <a style={linkStyle} >Previous Page</a>
        </Link>
        <span style={linkStyle}>{props.pagination.Page}</span>
        <Link href={`/monsters?page=${props.pagination.PageNext}`}>
            <a style={linkStyle} >Next Page</a>
        </Link>
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

    getList = () => {
        fetch(`http://localhost:3000/api/list/${this.props.page}`)
            .then(response => response.json())
            .then(res => this.setState({ list: res.data, pagination: res.pagination }) )
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
                  {/*
                    The pagination feature currently does not work.
                    It is something that I intend to look into in the FUTURE,
                    and come back to with regards to this project.

                    In the meantime, if you wish to use this and see a different page,
                    simply put a URL in your browser with the appropriate number.
                    EXAMPLE: `localhost:3000/monsters?page=6` will display page 6 of results.
                  */}
                <Pages pagination={this.state.pagination} />
                <MonList list={list} inst={this} />
              </Content>
            </Layout>
        )
    }
}