import React, { Component } from 'react'

const mainContent = {
    fontFamily: 'Arial, Sans-serif',
    borderRadius: '10px',
    backgroundColor: '#ccccff',
    margin: '5px',
    padding: '20px',
    height: 'auto',
    overflow: 'auto',
    width: '780px',
    float: 'right'
}

export default class Content extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={mainContent}>
                {this.props.children}
            </div>
        )
    }
}