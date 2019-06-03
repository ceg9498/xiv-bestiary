import Layout from "../comps/_Layout.js"
import FormActions from '../comps/FormActions.js'
import Content from "../comps/FullContent";

export default class extends FormActions {
  
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Layout title="Welcome!">
        <Content>
          <p>This is the index/home page. </p>
          <p>Some form of content is still needed - perhaps just a list of the newest or most frequently viewed pages?</p>
        </Content>
      </Layout>
    )
  }
}