import React from 'react';
import './App.css';
import Users from './Users.js';
import Posts from './Posts.js';
import Post from './Post.js';
import {Route} from 'react-router-dom';

class App extends React.Component{


  render(){
    return(
      <div>
        <Route path="/" exact component={Users}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/post" component={Post}/>
      </div>
    )

  }
}
export default App;
