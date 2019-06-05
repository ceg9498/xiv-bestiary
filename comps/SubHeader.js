import React, { Component } from 'react'

const sideCategoryDiv = {
    marginTop: '10px',
    position: 'relative',
    height: '26px'
}

const sideCategoryImg = {
    position: 'absolute',
    top: '-1px'
}

const sideCategoryText = {
    color: '#333399',
    position: 'absolute',
    left: '25px',
    fontWeight: 'bold',
    fontSize: '1.05em'
}

export class SideHeader extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={sideCategoryDiv}>
                <img src={this.props.icon} style={sideCategoryImg} />
                <span style={sideCategoryText}>{this.props.title}</span>
            </div>
        )
    }
}

const mainCategoryStyle = {
    borderBottom: '2px solid #333399',
    borderLeft: '2px solid #333399',
    marginBottom: '10px'
}

const h3Style = {
    color: '#333399',
    marginBottom: '5px',
    marginLeft: '10px'
}

export class MainHeader extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={mainCategoryStyle}>
                <h3 style={h3Style}>{this.props.title}</h3>
            </div>
        )
    }
}