import React from 'react';
import './App.css';
import Users from './pages/Users.js';
import Posts from './pages/Posts.js';
import Post from './pages/Post.js';
import {Route} from 'react-router-dom';

class App extends React.Component {


    render() {
        return (
            <div>
                <Route path="/" exact component={Users}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/post" component={Post}/>
            </div>
        )

    }
}

export default App;
