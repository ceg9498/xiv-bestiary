import React, { Component } from 'react'
import Link from 'next/link'
import * as superagent from 'superagent'

const linkStyle = {
  color: 'black',
  fontFamily: 'Arial, Sans-serif'
}

const MonLink = props => (
  <Link href={`/monsters/mon?webname=${props.mon.webname}`} as={`/m/${props.mon.webname}`}>
    <a style={linkStyle}>{props.mon.name}</a>
  </Link>
)

export default class MonList extends Component {
  constructor(props) {
    super(props)
    this.state = { formData: { name: '', webname: '', type: '', hp: '' } }
  }

  render(){
    const list = this.props.list || this.state.list
    const inst = this.props.inst || this.state.inst
    if(!list){
        return(
            <></>
        )
    }
    return(
        <div id="monster-list">
          <table cellPadding="5">
            <tbody>
            <tr>
              <th>
                {/* Edit */}
              </th>
              <th>
                {/* Delete */}
              </th>
              <th>
                Monster Name
              </th>
              <th>
                Rarity
              </th>
              <th>
                Monster Type
              </th>
              <th>
                Aggressive
              </th>
            </tr>
          {
            list.map(mon => (
              <tr key={mon._id}>
                <td className="edit" aria-label="Edit Monster">
                  ✏️
                </td>
                <td className="remove" onClick={inst.Remove(mon._id)} aria-label="Delete Monster">
                  &times;
                </td>
                <td className="description">
                  <MonLink mon={mon} />
                </td>
                <td className="description">
                  {mon.rarity}
                </td>
                <td className="description">
                  {mon.type}
                </td>
                <td className="description">
                  {inst.CheckAggro(mon.aggro)}
                </td>
              </tr>
            ))
          }
          </tbody>
            </table>
            <style jsx>{`
          div {
            font-family: 'Helvetica', 'sans-serif';
          }
          table {
            border-collapse: collapse;
            border: 3px solid #ccccff;
          }
          th {
            background-color: #ccccff;
          }
          tr:nth-child(even) {
            background-color: #ffffff;
          }
          tr:nth-child(odd) {
            background-color: #e6e6ff;
          }
          tr:hover {
            background-color: #ccccff;
          }
          a:link {
            text-decoration: none;
            color: black;
          }
          #monster-list {
            width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          .remove {
            cursor: pointer;
            color: #ff257b;
            font-size: 1.5em;
          }
          .edit {
            font-size: 1em;
          }
          .description {

          }
        `}</style>
        </div>
    )
  }
}