import React from 'react';
import {API_URL_GET_POST} from "../utilities/api.js";
import {API_URL_DELETE_POST} from "../utilities/api.js";
import {API_URL_PUT_POST} from "../utilities/api.js";
import CommentSection from "../common/CommentSection.js";

class Post extends React.Component {
    constructor() {
        super()

        this.state = {
            user: "",
            post: "post",
            comments: [],
            text: "",
            editing: false

        }
        this.initEditor();
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    componentDidMount() {
        let {post} = this.props.location;

        if (post === undefined) {
            post = JSON.parse(window.localStorage.getItem('post_state'));
            this.setState({
                post: JSON.parse(window.localStorage.getItem('post_state'))
            })
        } else {
            this.setState({
                post: this.props.location.post
            })

            window.localStorage.setItem('post_state', JSON.stringify(post));
        }
        fetch(`${API_URL_GET_POST}${post.id}`).then((response) =>
            response.json()
        ).then((data) => {
            console.log(data)
            this.setState({
                comments: data,

            })
        })

    }

    removePost = post => {
        const options = {
            method: "DELETE",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
        fetch(`${API_URL_DELETE_POST}${post.id}`, options).then((response) =>
            response.json()
        ).then((data) => {
            console.log(data)
        })

    }

    initEditor() {
        this.editor = <input type="text" defaultValue={this.state.post.body}
                             autoFocus={true} onChange={(event) => {
            this.setState({text: event.target.value})
        }}/>;
    }

    edit() {
        this.setState({
            text: this.state.post.body,
            editing: true
        })
    };

    save() {
        let newPost = {
            userId: this.state.post.userId,
            id: this.state.post.id,
            title: this.state.post.title,
            body: this.state.text
        }
        this.setState({
            post: newPost,
            editing: false
        })
        const options = {
            method: "PUT",
            body: JSON.stringify(newPost),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
        fetch(`${API_URL_PUT_POST}${newPost.id}`, options).then((response) =>
            response.json()
        ).then((data) => {
            console.log(data)
        })
    };

    componentDidUpdate() {
        this.initEditor();
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5>{this.state.user.username}</h5>
                        <h5 className="card-title">{this.state.post.title}</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            {this.state.editing ?
                                this.editor
                                : <p>{this.state.post.body}</p>
                            }


                        </div>
                        <div>

                            <button
                                onClick={this.state.editing ? this.save : this.edit}
                                type="button"
                                className="btn btn-success"
                            >
                                {this.state.editing ? "Save" : "Edit"}
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => {
                                    this.removePost(this.state.post)
                                }}
                            >
                                Delete
                            </button>
                        </div>

                    </div>

                </div>
                {this.state.comments.map((comment) => {
                    return (
                        <div className="col-6 mb-4" key={comment.id}>
                            <CommentSection comment={comment}/>
                        </div>
                    );
                })}


            </div>

        );
    }

}

export default Post;
