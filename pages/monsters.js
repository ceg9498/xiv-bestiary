import Layout from '../comps/_Layout.js'

export default function Monsters(props) {
    const list = this.state.list || this.props.list
    const { formData } = this.state
    return (
        <Layout title="Monsters">
            <h1>
            Monster List
            </h1>
            <div id="monster-list">
            <ul>
                {
                list.map(mon => (
                    <div key={mon._id}>
                    <span className="edit" aria-label="Edit Monster">
                        ✏️
                    </span>&nbsp;
                    <span className="remove" onClick={this.Remove(mon._id)} aria-label="Delete Monster">
                        &times;
                    </span>&nbsp;
                    <span className="description">
                        {mon.name}: This {mon.rarity} {mon.type} {this.CheckAggro(mon.aggro)} (<i>{mon.webname}</i>)
                    </span>
                    </div>
                ))
                }
            </ul>
            </div>
        </Layout>
    )
}