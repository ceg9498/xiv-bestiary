import React, { Component } from 'react'

const titleContent = {
    fontFamily: 'Arial, Sans-serif',
    borderRadius: '10px',
    padding: '10px',
    margin: '5px',
    backgroundColor: '#ccccff',
    width: '970px',
    height: '100px',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center'
}

const icons = {
    position: 'relative',
    top: '5px'
}

const aggroImg = {
    position: 'absolute',
    top: '-11px',
    left: '68px',
}

const monIcon = {
    marginLeft: '10px',
    position: 'static',
}

const pageTitle = {
    textDecoration: 'none',
    fontFamily: 'Arial, Sans-serif',
    fontSize: '50px',
    marginLeft: '25px',
    marginTop: 'auto',
    marginBottom: 'auto'
}

export default class MonHeader extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div style={titleContent}>
                    <div style={icons}>
                        <img src={this.props.image} alt={`${this.props.title}'s Icon'`} style={monIcon} />
                        <img src={`/static/AggressionIcons/${this.props.aggro}.png`} style={aggroImg} />
                    </div>
                    <span style={pageTitle}>{this.props.title}</span>
                </div>
            </div>
        )
    }
}