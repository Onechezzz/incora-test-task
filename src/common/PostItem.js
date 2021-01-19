import React from 'react';
import {NavLink} from 'react-router-dom';

class PostItem extends React.Component{


  render(){

    const { post , user } = this.props;
    return(
      <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">{post.body}</p>
            <NavLink to={{
              pathname: './post',
              post : post,
              user : user
            }}>
              <button
                type="button"
                className="btn btn-success"
              >
                Details
              </button>
            </NavLink>

          </div>



        </div>
      </div>

      </div>

    );
  }
}

export default PostItem;
