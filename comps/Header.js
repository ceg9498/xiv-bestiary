import React, { Component } from 'react'
import Link from 'next/link'

// colors:
// nav bg (lav) '#ccccff'
// head bg (dk purp) '#333399'
// highlights/accents: white

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
    borderStyle: 'none solid solid solid',
    borderColor: '#333399',
    borderWidth: '2px',
    backgroundColor: "#ccccff",
    height: '36px'
}

const linkList = {
    display: "inline-block",
    borderTop: "solid 2px white",
    listStyle: 'none',
    margin: '0',
    padding: '0',
    width: '100%'
}

const listItem = {
    float: 'left',
}

const linkStyle = {
    textDecoration: 'none',
    fontFamily: 'Arial, Sans-serif',
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: "#ccccff",
    display: "block",
    borderRight: 'solid 2px white',
    padding: '8px',
    width: '120px',
    textAlign: 'center',
    height: '100%'
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
            <nav style={navBar}>
            <ul style={linkList}>
                <li style={listItem}>
                    <Link href="/index">
                        <a style={linkStyle}>Home</a>
                    </Link>
                </li>
                <li style={listItem}>
                    <Link href="/monsters">
                        <a style={linkStyle}>Monsters</a>
                    </Link>
                </li>
                <li style={listItem}>
                    <Link href="/about">
                        <a style={linkStyle}>About</a>
                    </Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}
}