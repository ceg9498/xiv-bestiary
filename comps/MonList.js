import React, { Component } from 'react'
import Link from 'next/link'

const linkStyle = {
  color: 'black',
  fontFamily: 'Arial, Sans-serif'
}

const MonLink = props => (
  <Link href={`/m/${props.mon.id}`}>
    <a style={linkStyle}>{ToUpper(props.mon.name)}</a>
  </Link>
)

const ToUpper = temp => {
    // Format the monster's name to use a capital for the first letter
    // FUTURE: determine which letters to capitalize based on spaces(?)
    let name = temp
    name = name.charAt(0).toUpperCase() + name.slice(1)

    return name
}

export default class MonList extends Component {
  constructor(props) {
    super(props)
    this.state = { formData: { name: '', webname: '', type: '', hp: '' } }
  }

  render(){
    const list = this.props.list

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
                ID
              </th>
              <th>
                Monster Name
              </th>
            </tr>
          {
            list.map(mon => (
              <tr key={mon.id}>
                <td className="description">
                  {mon.id}
                </td>
                <td className="description">
                  <MonLink mon={mon} />
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