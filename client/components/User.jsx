import React from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import _ from 'lodash'

import usernameData from './username.json'
import { getUsers } from '../actions/users'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
        }
        this.makeUsername = this.makeUsername.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        this.makeUsername()
        this.props.dispatch(getUsers())
    }

    handleSubmit(event) {
        event.preventDefault()
        request
            .post('/api/v1/chatroom')
            .send({
                username: this.state.username
            })
            .end()
    }

    makeUsername() {
        const firstWord = _.sample(usernameData.first)
        const secondWord = _.sample(usernameData.second)
        const numeric = Number(_.random(1000, 10000))
        const concatenate = firstWord + '_' + secondWord + numeric
        this.setState({
            username: concatenate
        })
    }


    render() {
        const user = this.props.users
        return (
            <div>
                <form>
                    <input type='hidden' value={this.state.username} />
                    <button type='submit' onClick={(event) => this.handleSubmit(event)}>Enter chatroom</button>
                    {/* {this.props.users && <h1> {this.props.users[0].username} </h1>}
                    {this.props.users && <img src={this.props.users[1].icon} />} */}
                </form>
                <h1>{this.state.username}</h1>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(User)