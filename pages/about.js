import React, { Component } from 'react'
import Layout from '../comps/_Layout.js'
import Content from '../comps/FullContent.js';

export default class extends Component {
    constructor(props) {
      super(props)
    }
    render(){
        return (
            <Layout>
                <Content>
                    <h1>About</h1>
                    <p>This data site was built as a sample/practice project. It is in no way 
                        complete; there are many things I still wish to accomplish. However, 
                        I have reached a point where working on this becomes faster, but the 
                        rate at which I learn things slows down. As such, I am temporarily 
                        moving on to a different project so I can learn more as quickly as 
                        possible. When I return to this project, I will either resume where 
                        I left off or rebuild it into something even better.
                    </p>
                </Content>
            </Layout>
        )
    }
}