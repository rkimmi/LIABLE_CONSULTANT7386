import React from 'react'
import {connect} from 'react-redux'
import request from 'superagent'

import usernameData from './username.json'

import {getUsers} from '../actions/users'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                username: '',
        }
        this.makeUsername = this.makeUsername.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount () {
       this.props.dispatch(getUsers())
    }
 
    componentWillMount () {
        this.makeUsername ()
    }

    handleSubmit (event) {
        request
            .post('/api/v1/chatroom')
            .send({
                username: this.state.username
            })   
    }

    makeUsername () {
        const firstWord = usernameData.first[Math.floor(Math.random()* usernameData.first.length)]
        const secondWord = usernameData.second[Math.floor(Math.random()* usernameData.second.length)]
        const min = 1000
        const max = 10000
        const numeric = Number([Math.floor(Math.random() * (max - min) + min)])
        const concatenate = firstWord + '_' + secondWord + numeric
        this.setState({
                username: concatenate
        })
    }


    render () {
        const user = this.props.users
        return (
            <div>
                <form method='post' 
                    onSubmit={event => this.handleSubmit(event)}>
                <button type='submit'>Enter chatroom</button>
                <input type="hidden" value={this.state.username} />
                 {/* {this.props.users && <h1> {this.props.users[0].username} </h1>}
                 {this.props.users && <img src={this.props.users[1].icon} />} */}
                 <h1>{this.state.username}</h1>
                 </form>
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