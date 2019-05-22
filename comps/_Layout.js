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

export default function Layout(props) {
    return(
        <div style={layoutStyle}>
            <Header />
            <div>
                <h3 style={hStyle}>{props.title}</h3>
            </div>
            {props.children}
        </div>
    )
}