import Layout from "../comps/_Layout.js"
import Content from "../comps/FullContent"
import React, { Component } from 'react'

export default class extends Component {
  
  constructor () {
    super()
  }

  render () {
    return (
      <Layout>
        <Content>
          <h1>Welcome!</h1>
          <p>This is a Bestiary for Final Fantasy XIV Online. It is currently unfinished, 
            as most of the data needs to be put in by hand. The following is a list of 
            features which I still need to implement for basic functionality, or would like 
            to implement in the future.</p>
          <ul>
            <li>Expand my use of XIVAPI to include using the Content Links for obtaining 
              Hunting Log and Hunt Bills data.
            </li>
            <li>Implement a data storage system for use in a final product to store extra data, 
              which would be put in through the site by a person.
            </li>
            <li>Monster Page Editing: Adding editing to each monster page would allow me to 
              easily add data to my data storeage system. I would prefer for each item to be 
              its own edit, rather than editing the whole page.
            </li>
          </ul>
        </Content>
      </Layout>
    )
  }
}