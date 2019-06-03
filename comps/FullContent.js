import React, { Component } from 'react'

const mainContent = {
    fontFamily: 'Arial, Sans-serif',
    borderRadius: '10px',
    backgroundColor: '#ccccff',
    margin: '5px',
    width: '1000px',
    padding: '10px',
    height: 'auto',
    overflow: 'auto',
    width: '970px'
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