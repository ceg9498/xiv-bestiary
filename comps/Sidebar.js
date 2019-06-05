import React, { Component } from 'react'

const quickInfoBox = {
    fontFamily: 'Arial, Sans-serif',
    borderRadius: '10px',
    padding: '10px',
    margin: '5px',
    backgroundColor: '#ccccff',
    width: '140px',
    height: 'auto',
    float: 'left',
}

const h4style = {
    padding: '0px',
    margin: '0px'
}

export default class Sidebar extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={quickInfoBox}>
                {this.props.children}
            </div>
        )
    }
}