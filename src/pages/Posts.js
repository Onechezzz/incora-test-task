import React from 'react';
import {API_URL_GET_POSTS} from "../utilities/api.js";
import PostItem from "../common/PostItem.js";
import PostModal from '../common/PostModal.js';

class Posts extends React.Component {
    constructor() {
        super()

        this.state = {
            currentUser: {},
            posts: []
        }
    }

    componentDidMount() {

        let {currentUser} = this.props.location;

        if (currentUser === undefined) {
            currentUser = JSON.parse(window.localStorage.getItem('user_state'));

            this.setState({
                currentUser: JSON.parse(window.localStorage.getItem('user_state'))
            })
        } else {

            this.setState({
                currentUser: this.props.location.currentUser
            })

            window.localStorage.setItem('user_state', JSON.stringify(currentUser));

        }


        fetch(`${API_URL_GET_POSTS}${currentUser.id}`).then((response) =>
            response.json()
        ).then((data) => {

            this.setState({
                posts: data,
            })
        })
    }


    render() {
        return (
            <div className="container">
                <h1>Current User: {this.state.currentUser.username}</h1>
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.posts.map((post) => {
                                return (
                                    <div className="col-6 mb-4" key={post.id}>
                                        <PostItem post={post} user={this.state.currentUser}/>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>

                <PostModal currentUser={this.state.currentUser}/>

            </div>


        );
    }
}

export default Posts;
