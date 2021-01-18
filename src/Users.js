import React from 'react';
import {API_URL} from'./api.js';
import User from './User.js';

class Users extends React.Component{
constructor(){
  super();
  this.state = {
    users : []
  }
}
componentDidMount(){
  console.log("Did mount");
  console.log(API_URL);
  //api_key=${API_KEY}
  fetch(`${API_URL}`).then((response)=>
    response.json()
).then((data) => {
  console.log(data)
  this.setState({
    users : data
  })
})
}

render(){
  console.log("Users", this.state.users)
  console.log("This", this)
  return(
    <div className="container">
      <div className="row">
        <div className="col-9">
          <div className="row">
            {this.state.users.map(user => {
              return(
                <div className="col-6 mb-4" key={user.id}>
                    <User user={user} />      
                </div>

              );
        })}

          </div>
        </div>
      </div>
    </div>
    // <div >
    // {this.state.users.map(user => {
    //   return(
    //     <div key={user.id}>
    //       <p>{user.name}</p>
    //     </div>
    //
    //   )
    // }
    // )}
    // </div>
    //

  )
}
}
export default Users;
