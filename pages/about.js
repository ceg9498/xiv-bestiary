import Layout from '../comps/_Layout.js'
import FormActions from '../comps/FormActions.js'

export default class extends FormActions {
    constructor(props) {
      super(props)
    }
    render(){
        const list = this.props.list
        const formData = this.props.formData
        const inst = this.props.inst
        return (
            <Layout title="About" list={list} formData={formData} inst={inst}>
                <p>This is the about page.</p>
            </Layout>
        )
    }
}