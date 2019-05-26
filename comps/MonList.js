import React, { Component } from 'react'

export default class MonList extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const list = this.props.list
    const inst = this.props.inst
    return(
        <div id="monster-list">
          <ul>
          {
            list.map(mon => (
              <div key={mon._id}>
                <span className="edit" aria-label="Edit Monster">
                  ✏️
                </span>&nbsp;
                <span className="remove" onClick={inst.Remove(mon._id)} aria-label="Delete Monster">
                  &times;
                </span>&nbsp;
                <span className="description">
                  {mon.name}: This {mon.rarity} {mon.type} {inst.CheckAggro(mon.aggro)} (<i>{mon.webname}</i>)
                </span>
              </div>
            ))
          }
            </ul>
            <style jsx>{`
          div {
            font-family: 'Helvetica', 'sans-serif';
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
        </div>
    )
  }
}