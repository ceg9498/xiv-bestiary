import Layout from '../../comps/_Layout.js'
import FormActions from '../../comps/FormActions.js'
import Sidebar from '../../comps/Sidebar.js'
import Content from '../../comps/SplitContent.js'

export default class extends FormActions {
  constructor() {
      super()
      this.state = { formData: { name: '', webname: '', level: '', type: '', hp: '', aggro: '' } }
  }

  TextBox(change, data, placeholder){
    return(
      <span>
        <input
          type="text"
          onChange={this.SetForm(change)}
          value={data}
          placeholder={placeholder} />
        <br/>
        <style jsx>{`
          input {
              padding: 5px;
              border: 0px;
              background-color: #f0f0f0;
              margin: 5px;
              font-family: Helvetica, sans-serif;
              width: 120px;
          }
        `}</style>
      </span>
    );
  }

  DisplayRadio(id){
    return(
      <div className="radio">
        <label style={{filter: (this.state.formData.aggro === id) ? 'grayscale(0)' : 'grayscale(100%)'}}>
          <input
            type="radio"
            name="aggro"
            value={id}
            onChange={this.SetForm('aggro')}
            checked={id === this.state.formData.aggro}
            className="aggro-input" />
          <img src={`/static/AggressionIcons/${id}.png`} alt={id} />
        </label>
      <style jsx>{`
          fieldset {
            border: 1px solid;
            width: 120px;
            margin-left: auto;
            margin-right: auto;
          }
          label:hover {
            border: 1px solid;
            border-color: #ccccff;
          }
          .radio {
            height: 32px;
            width: 32px;
            border: 0px solid;
            border-color: red;
            float: left;
          }
          input[type="radio"] {
            opacity: 0;
          }
          .radio label{
            position: relative;
            height: 32px;
            width: 32px;
            display: inline-block;
          }
          .radio img{
            position: relative;
            top: -23px;
          }
        `}</style>
      </div>
    )
  }

  SelectAggro(){
    return(
      <fieldset>
        <legend>Aggro Type</legend>

        {this.DisplayRadio("p1")}
        {this.DisplayRadio("p2")}
        {this.DisplayRadio("p3")}
        {this.DisplayRadio("p4")}
        {this.DisplayRadio("p5")}
        {this.DisplayRadio("p6")}
        <br/>

        {this.DisplayRadio("a1")}
        {this.DisplayRadio("a2")}
        {this.DisplayRadio("a3")}
        {this.DisplayRadio("a4")}
        {this.DisplayRadio("a5")}
        {this.DisplayRadio("a6")}

      </fieldset>
    );
  }

  SelectRarity(){
    return(
      <span>
        <select name='rarity' onChange={this.SetForm('rarity')}>
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
        <style jsx>{`
          select {
              padding: 5px;
              border: 0px;
              background-color: #f0f0f0;
              margin: 5px;
              font-family: Helvetica, sans-serif;
              width: 130px;
          }
        `}</style>
      </span>
    );
  }

  render(){
    let formData = this.state.formData
    return (
      <Layout title="Add a Monster">
        <Sidebar>
          <form onSubmit={this.Add()}>
            {this.TextBox( 'webname', formData.webname, "Webname" )}
            {this.TextBox( 'name', formData.name, "Name")}
            {this.TextBox( 'level', formData.level, "Level")}
            {this.TextBox( 'type', formData.type, "Monster Type")}
      
            {this.SelectAggro()}
            
            {this.SelectRarity()}

            {this.TextBox( 'hp', formData.hp, "HP Value")}
            <button type="submit" disabled={this.IsFormInvalid()}>Add</button>
          </form>
        </Sidebar>
        <Content>
          <p>Use this area to confirm the look of data before submitting.</p>
          <span>Name: {formData.name}</span><br/>
          <span>Webname: {formData.webname}</span><br/>
          <span>Level: {formData.level}</span><br/>
          <span>Type: {formData.type}</span><br/>
          <span>HP: {formData.hp}</span><br/>
        </Content>
          
        <style jsx>{`
          div {
              width: 170px;
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
        `}</style>
      </Layout>
    )
  }
}