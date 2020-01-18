import React, { Component } from 'react'

class UserItem extends Component {

    // state = {
    //     id:24315018,
    //     name:'Bishal Udash',
    //     avatar_url:'https://avatars1.githubusercontent.com/u/24315018?v=4',
    //     html_url:'https://github.com/bishaludas'
    // }

    render() {
        const {id, name, avatar_url, html_url} = this.props.user;

        return (
            <div className="card text-center">
                <img src={avatar_url} alt={name} 
                className='round-img' style={{width:'100px'}} />
                <p>{this.props.user.name}</p>   

                <div>
                <a href={html_url} className="btn btn-primary btn-sm">Follow</a>
                </div>
            </div>
        )
    }
}

export default UserItem
