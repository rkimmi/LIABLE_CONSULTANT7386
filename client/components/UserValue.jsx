import React from 'react'

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
        const userValue = Number([Math.floor(Math.random() * (10 - 1) + 1)])
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