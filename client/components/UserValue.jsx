import React from 'react'

import _ from 'lodash'

class UserValue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
        this.makeUserValue = this.makeUserValue.bind(this)
    }

    componentWillMount () {
        this.makeUserValue()
    }

    makeUserValue () {
        const userValue = Number(_.random(1, 10))
        console.log(userValue)
        this.setState({
                value: userValue
        })
    }

    render () {
        return (
            <div>
                <h1>{this.state.value}</h1>
            </div>
        )
    }
}

export default UserValue