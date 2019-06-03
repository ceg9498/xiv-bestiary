import React, { Component } from 'react'
import Link from 'next/link'

const header = {
    backgroundColor: '#333399',
    margin: '0px',
    padding: '0px',
    width: 'auto'
}

const banner = {
    fontFamily: 'Arial, Sans-serif',
    color: 'white',
    margin: 'auto',
    width: '1000px',
    height: '100px',
    overflow: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center'
}

const h1Style = {
    textDecoration: 'none',
    fontFamily: 'Arial, Sans-serif',
    fontSize: '40px'
}

const navBar = {
    backgroundColor: '#ccccff',
    fontSize: '18px',
    borderStyle: 'solid none solid none',
    borderWidth: '2px 0px 3px 0px',
    borderColor: 'white white #333399 white',
    height: '30px',
    overflow: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center'
}

const linkArea = {
    borderStyle: 'none none none solid',
    borderWidth: '2px',
    borderColor: 'white',
    height: '30px',
    width: '1000px',
    margin: 'auto',
    overflow: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center'
}

const linkDivider = {
    height: '30px',
    borderStyle: 'none solid none none',
    borderWidth: '2px',
    borderColor: 'white',
    overflow: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center'
}

const linkStyle = {
    marginLeft: '20px',
    marginRight: '40px',
    marginTop: 'auto',
    marginBottom: 'auto',
    textDecoration: 'none',
    fontFamily: 'Arial, Sans-serif',
    color: 'black'
  }

export default class Header extends Component {
    constructor() {
      super()
    }
    render(){
    return(
        <div style={header}>
            <div style={banner}>
                <h1 style={h1Style}>FFXIV Bestiary</h1>
            </div>
            <div style={navBar}>
                <div style={linkArea}>
                    <span style={linkDivider}>
                        <Link href="/index">
                            <a style={linkStyle}>Home</a>
                        </Link>
                    </span>
                    <span style={linkDivider}>
                        <Link href="/monsters">
                            <a style={linkStyle}>Monsters</a>
                        </Link>
                    </span>
                    <span style={linkDivider}>
                        <Link href="/monsters/add">
                            <a style={linkStyle}>Add a Monster</a>
                        </Link>
                    </span>
                    <span style={linkDivider}>
                        <Link href="/about">
                            <a style={linkStyle}>About</a>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
}