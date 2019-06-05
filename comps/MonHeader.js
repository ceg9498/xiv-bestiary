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
    alignContent: 'center',
    position: 'relative'
}

const icons = {
    position: 'relative',
    top: '5px',
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

const nameContent = {
    marginLeft: '10px',
    position: 'static',
    marginTop: 'auto',
    marginBottom: 'auto'
}

const pageTitle = {
    textDecoration: 'none',
    fontFamily: 'Arial, Sans-serif',
    fontSize: '50px',
    marginLeft: '25px'
}

const patchInfo = {
    fontStyle: 'italic',
    fontSize: '.75em',
    color: 'gray',
    marginLeft: '10px',
    position: 'absolute',
    right: '30px',
    bottom: '10px'
}

export default class MonHeader extends Component {
    constructor(props){
        super(props)
    }

    render(){
        // Format the monster's name to use a capital for the first letter
        // FUTURE: determine which letters to capitalize based on spaces(?)
        let name = this.props.name
        name = name.charAt(0).toUpperCase() + name.slice(1)

        // Determine what to use for the monster's icon
        let monsterIcon;
        if(this.props.hasIcon){
            monsterIcon = `/static/monsters/${this.props.id}`
        } else {
            monsterIcon = "/static/monIcon_generic.png"
        }

        // Determine what to use for an Aggro type marker
        let aggroIcon;
        if(this.props.aggro === undefined){
            aggroIcon = `/static/AggressionIcons/notFound.png`
        } else {
            aggroIcon = `/static/AggressionIcons/${this.props.aggro}.png`
        }

        // Display everything
        return(
            <div style={titleContent}>
                <div style={icons}>
                    <img src={monsterIcon} alt={`${name}'s Icon'`} style={monIcon} />
                    <img src={aggroIcon} style={aggroImg} />
                </div>
                <div style={nameContent}>
                    <span style={pageTitle}>{name}</span><br/>
                    <span style={patchInfo}>{this.props.patch.name} ({this.props.patch.number})</span>
                </div>
            </div>
        )
    }
}