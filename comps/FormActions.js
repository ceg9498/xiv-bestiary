import React from 'react'
import * as superagent from 'superagent'

export default class extends React.Component {
    SetForm (prop) {
        return ev => {
            const state = this.state || {}
            const formData = state.formData || {}
            this.setState(Object.assign({}, state, {
                formData: Object.assign({}, formData, {
                    [prop]: ev.target.value
                })
            }));
        }
    }

    IsFormInvalid () {
    const state = this.state || {}
    const formData = state.formData || {}
    return !formData.name || !formData.webname || !formData.rarity
    }

    Remove (_id) {
    return ev => {
        superagent.del(`http://localhost:3000/api/${_id}`)
        .then(() => {
            const state = this.state || {}
            const list = this.state.list || this.props.list || []
            this.setState(Object.assign({}, state, {
            list: list.filter(mon => mon._id !== _id)
            }))
        })
        .catch(error => console.error(error.stack))
    }
    }

    Add () {
    return ev => {
        ev.preventDefault()
        const state = this.state || {}
        const formData = state.formData || {}
        this.setState(Object.assign({}, this.state, {
            formData: { webname: '', name: '', level: '', type: '', hp: '', aggro: '' }
        }))
        console.log("formdata to submit: ", formData)
        ev.target.reset()

        superagent.post('http://localhost:3000/api', formData)
        .then(res => {
            const state = this.state || {}
            const list = this.state.list || this.props.list || []
            this.setState(Object.assign({}, state, {
            list: [res.body.mon].concat(list)
            }))
        })
        .catch(error => console.error(error.stack))
    }
    }

    CheckAggro (aggro) {
    if(Boolean(aggro)){
        return "Yes"
    } else {
        return "No"
    }
    }
}