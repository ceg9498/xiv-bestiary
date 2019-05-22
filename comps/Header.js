import Link from 'next/link'

const linkStyle = {
    marginRight: 15,
    textDecoration: 'none',
    fontFamily: 'Arial, Sans-serif'
  }

const hStyle = {
    textDecoration: 'none',
    fontFamily: 'Arial, Sans-serif'
}

export default function Header() {
    return(
        <div>
            <h1 style={hStyle}>FFXIV Bestiary</h1>
            <span>
                <Link href="/index">
                    <a style={linkStyle}>Home</a>
                </Link>
            </span>
            <span>
                <Link href="/monsters">
                    <a style={linkStyle}>Monsters</a>
                </Link>
            </span>
            <span>
                <Link href="/about">
                    <a style={linkStyle}>About</a>
                </Link>
            </span>
        </div>
    )
}