import Layout from "../comps/_Layout.js"
import React from 'react'
import * as superagent from 'superagent'
import FormActions from '../comps/FormActions.js'
import AddMon from "../comps/AddMon.js";

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
      <Layout id='container' title="Welcome!">
        <h1>
          New Monster
        </h1>
          <AddMon formData={formData} inst={this} />

        <h1>
          Monster List
        </h1>
        <div id="monster-list">
          <ul>
            {
              list.map(mon => (
                <div key={mon._id}>
                  <span className="edit" aria-label="Edit Monster">
                    ✏️
                  </span>&nbsp;
                  <span className="remove" onClick={this.Remove(mon._id)} aria-label="Delete Monster">
                    &times;
                  </span>&nbsp;
                  <span className="description">
                    {mon.name}: This {mon.rarity} {mon.type} {this.CheckAggro(mon.aggro)} (<i>{mon.webname}</i>)
                  </span>
                </div>
              ))
            }
          </ul>
        </div>
        <style jsx>{`
          div {
            font-family: 'Helvetica', 'sans-serif';
          }
          h1 {
            color: #ccbc1d;
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