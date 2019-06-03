import Layout from '../comps/_Layout.js'
import FormActions from '../comps/FormActions.js'
import Content from '../comps/FullContent.js';

export default class extends FormActions {
    constructor(props) {
      super(props)
    }
    render(){
        return (
            <Layout>
                <Content>
                    <h1>About</h1>
                    <p>This is the about page.</p>
                </Content>
            </Layout>
        )
    }
}