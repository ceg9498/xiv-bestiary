import React, { Component } from 'react'
import Link from 'next/link'

const linkStyle = {
  color: 'black',
  fontFamily: 'Arial, Sans-serif'
}

const MonLink = props => (
  <Link href={`/mon?webname=${props.webname}`} as={`/m/${props.webname}`}>
    <a style={linkStyle}>{props.name}</a>
  </Link>
)

export default class MonList extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const list = this.props.list
    const inst = this.props.inst
    console.log("MonList",list)
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
                  <MonLink webname={mon.webname} name={mon.name} />
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
            border-radius: 5px;
          }
          tr:nth-child(even) {
            background-color: #f2f2f2;
          }
          tr:nth-child(odd) {
            background-color: #e2f2ff;
          }
          a:link {
            text-decoration: none;
            color: black;
          }
          #monster-list {
            width: 800px;
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