import Layout from "../comps/_Layout.js"
import * as superagent from 'superagent'
import FormActions from '../comps/FormActions.js'
import AddMon from "../comps/AddMon.js";
import MonList from "../comps/MonList.js"

export default class extends FormActions {
  static async getInitialProps ({ req }) {
    if (req) {
      const { db } = req
      const list = await db.collection('Monsters').find().sort({ createdAt: -1 })
        .toArray()
      return { list }
    }

    const { list } = await superagent.get('http://localhost:3000/api')
      .then(res => res.body)

    return { list }
  }

  constructor () {
    super()
    this.state = { formData: { name: '', webname: '', type: '', hp: '' } }
  }

  render () {
    const list = this.state.list || this.props.list
    const { formData } = this.state
    return (
      <Layout id='container' title="Welcome!" list={list} formData={formData} inst={this}>
        <p>This is the index/home page. </p>
        <p>Some form of content is still needed - perhaps just a list of the newest or most frequently viewed pages?</p>

        <style jsx>{`
          div {
            font-family: 'Bookman', 'Helvetica', 'sans-serif';
          }
          h1 {
            color: #6530b5;
          }
          .description {
            position: relative;
            top: -0.2em;
          }
          #container {
            width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          #monster-list {
            width: 800px;
            border: 1px solid #DDD;
            border-radius: 5px;
          }
          .remove {
            cursor: pointer;
            color: #ff257b;
            font-size: 1.5em;
          }
          .edit {
            font-size: 1em;
          }
        `}</style>
      </Layout>
    )
  }
}