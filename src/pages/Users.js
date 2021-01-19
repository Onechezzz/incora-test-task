import React from 'react';
import {API_URL_GET_USERS} from '../utilities/api.js';
import User from '../common/User.js';

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch(`${API_URL_GET_USERS}`).then((response) =>
            response.json()
        ).then((data) => {
            console.log(data)
            this.setState({
                users: data
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.users.map(user => {
                                return (
                                    <div className="col-6 mb-4" key={user.id}>
                                        <User user={user}/>
                                    </div>

                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users;
