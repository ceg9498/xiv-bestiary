import React, { Component } from 'react'
import Header from "./Header.js"

const bodyDiv = {
    margin: 'auto',
    width: '1000px',
    overflow: 'auto'
}

export default class Layout extends Component {
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div>
            <Header />
            <div style={bodyDiv}>
                    {this.props.children}
            </div>
        </div>
    )
}
}