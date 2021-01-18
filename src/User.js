import React from 'react';
import {NavLink} from 'react-router-dom';

class User extends React.Component{
  constructor(){
    super()

    this.state = {

    }
  }


  render(){
    // console.log("Props",props);
    const { user } = this.props;
    return(
      <div>
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">{user.username}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">{user.name}</p>
            <NavLink to={{
              pathname: './posts',
              user : user
            }}>
              <button
                type="button"
                className="btn btn-success"
              >
                Posts
              </button>
            </NavLink>
          </div>



        </div>
      </div>

      </div>

    );
  }
}

export default User;
