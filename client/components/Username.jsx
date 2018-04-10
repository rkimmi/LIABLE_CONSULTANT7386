import React from 'react'

import usernameData from './username.json'

class Username extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                username: '',
        }
        this.makeUsername = this.makeUsername.bind(this)
    }

    componentWillMount () {
        this.makeUsername ()
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
        console.log(concatenate)
    }


    render () {
        return (
            <div>
                <h1>{this.state.username} </h1>
                {/* <h1>{this.state.user.value}</h1> */}
            </div>

        )
    }
}


export default Username