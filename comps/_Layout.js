import React, { Component } from 'react'
import Header from "./Header.js"

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const hStyle = {
    textDecoration: 'none',
    fontFamily: 'Arial, Sans-serif'
}

export default class Layout extends Component {
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div style={layoutStyle}>
            <Header />
            <div>
                <h3 style={hStyle}>{this.props.title}</h3>
            </div>
            {this.props.children}
        </div>
    )
}
}