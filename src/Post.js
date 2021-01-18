import React from 'react';
import {API_URL_GET_POST} from "./api.js";
import CommentSection from "./CommentSection.js";
import {API_URL_DELETE_POST} from "./api.js";

class Post extends React.Component{
  constructor(){
    super()

    this.state = {
      comments : []
    }
  }
  componentDidMount(){
    console.log("Did mount");
    const { user } = this.props.location;
    console.log("API",API_URL_GET_POST);
    //api_key=${API_KEY}
    fetch(`${API_URL_GET_POST}${user.id}`).then((response)=>
      response.json()
  ).then((data) => {
    console.log(data)
    this.setState({
      comments : data,

    })
    console.log("comments:", this.state.comments);
  })

  }
  removePost = post => {
    //api_key=${API_KEY}
    console.log("Post:", post);
    const options = {
      method : "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
  }
    fetch(`${API_URL_DELETE_POST}${post.id}`,options).then((response)=>
      response.json()
  ).then((data) => {
    console.log(data)
  })

 }

  render(){
    const { post , user} = this.props.location;
    console.log("props",this.props);
    return(
      <div>
      <div className="card">
        <div className="card-body">
          <h5>{user.username}</h5>
          <h5 className="card-title">{post.title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">{post.body}</p>

          </div>
          <div>
          <button
            type="button"
            className="btn btn-success"
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={()=>{this.removePost(post)}}
          >
            Delete
          </button>
        </div>

        </div>

      </div>
          {this.state.comments.map((comment)=>{
            return (
              <div className="col-6 mb-4" key={comment.id}>
                <CommentSection comment={comment} />
              </div>
            );
          })}


        </div>

    );
  }
}

export default Post;
