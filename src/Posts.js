import React from 'react';
import {API_URL_GET_POSTS} from "./api.js";
import PostItem from "./PostItem.js";
// import PopUp from './PopUp.js';
import PostModal from './PopUp.js';

class Posts extends React.Component{
  constructor(){
    super()

    this.state = {
      currentUser : {},
      posts : []
    }
  }
  componentDidMount(){
    console.log("Did mount");
    const { user } = this.props.location;
    console.log("API",API_URL_GET_POSTS);
    //api_key=${API_KEY}
    fetch(`${API_URL_GET_POSTS}${user.id}`).then((response)=>
      response.json()
  ).then((data) => {
    console.log(data)
    this.setState({
      posts : data,
    })
  })
      if (user !== undefined) {
        this.setState({
        currentUser: user
      })
    }
  }

  render(){
    // const { user } = this.props.location;
    // console.log("user", user)

    // console.log("API",API_URL_GET_POSTS);
    // console.log("Props",props);
    // const { user } = this.props;
    return(
      <div className="container">
      <h1>Current User: {this.state.currentUser.username}</h1>
        <div className="row">
          <div className="col-9">
            <div className="row">
        {this.state.posts.map((post)=>{
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

// <div className="card">
//   <div className="card-body">
//     <h6 className="card-title">Hello</h6>
//     <div className="d-flex justify-content-between align-items-center">
//       <p className="mb-0">Pupa</p>
//     </div>
//
//   </div>
// </div>
export default Posts;
