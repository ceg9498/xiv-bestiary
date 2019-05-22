export default function AddMon(props) {
    return(
        <div>
          <form onSubmit={props.inst.Add()}>
            <input
              type="text"
              onChange={props.inst.SetForm('webname')}
              value={props.formData.webname}
              placeholder="Webname" />
              <br/>
            <input
              type="text"
              onChange={props.inst.SetForm('name')}
              value={props.formData.name}
              placeholder="Name" />
              <br/>
            <input
              type="text"
              onChange={props.inst.SetForm('type')}
              value={props.formData.type}
              placeholder="Monster Type" />
              <br/>
            <input className="checkbox"
              type="checkbox"
              onChange={props.inst.SetForm('aggro')}
              value={props.formData.aggro} /><span>Aggressive?</span>
              <br/>
            <select name='rarity' onChange={props.inst.SetForm('rarity')}>
                <option value='' defaultValue>Monster Rarity</option>
                <option value='Common'>Common</option>
                <option value='Uncommon'>Uncommon</option>
                <option value='Rare'>Rare</option>
                <option value='Boss'>Boss</option>
                <option value='B Rank'>B Rank</option>
                <option value='A Rank'>A Rank</option>
                <option value='S Rank'>S Rank</option>
            </select>
              <br/>
            <input
              type="text"
              onChange={props.inst.SetForm('hp')}
              value={props.formData.hp}
              placeholder="HP Value" />
              <br/>
            <button type="submit" disabled={props.inst.IsFormInvalid()}>Add</button>
          </form>
          <style jsx>{`
            div {
                width: 170px;
                border: 1px solid #DDD;
                border-radius: 5px;
            }
            input {
                padding: 5px;
                border: 0px;
                background-color: #f0f0f0;
                margin: 5px;
                font-family: Helvetica, sans-serif;
                width: 150px;
            }
            .checkbox {
                width: 20px;
            }
            select {
                padding: 5px;
                border: 0px;
                background-color: #f0f0f0;
                margin: 5px;
                font-family: Helvetica, sans-serif;
                width: 160px;
            }
            button {
              background-color: #ff257b;
              color: #ffffff;
              font-weight: bold;
              border: 0px;
              border-radius: 2px;
              padding: 5px;
              padding-left: 8px;
              padding-right: 8px;
              margin: 5px;
            }
            span {
              font-family: 'Helvetica', 'sans-serif';
              font-size: .9em;
            }
          `}</style>
        </div>
    )
}