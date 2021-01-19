import React from 'react';
import Modal from 'react-modal';
import {API_URL_POST_POSTS} from "../utilities/api.js";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


Modal.setAppElement('#root')

class PostModal extends React.Component{
  constructor(){
    super()

    this.state = {
      modalIsOpen: false,
      subtitle : "",
      title: "",
      body: ""
    }
  }

  openModal = () => {
    this.setState({
      modalIsOpen : true
    })
  }
  changeTitle = (e) =>{
      this.setState({title: e.target.value});
    }
    changeBody = (e) =>{
      this.setState({body: e.target.value});
    }

  addPostToCurrentUser = (e)=> {
    e.preventDefault()
    const {currentUser} = this.props;
    const newPost = {
      title : this.state.title,
      body : this.state.body,
      userId : currentUser.id
    }

    const options = {
      method : "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost)
  };
    fetch(`${API_URL_POST_POSTS}`,options).then((response)=>
      response.json()
  ).then((data) => {
    console.log(data);
  }).catch((error)=>{
    console.log(error);
  });


  }

  closeModal = () =>{
    this.setState({
      modalIsOpen : false
    })
  }
    render(){
      return (
        <div>
          <button className="btn btn-success" type="button" onClick={this.openModal}>Add Post</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={null}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <h2>Specify:</h2>
              <form>
              <div className="form-group d-flex">
                <div className="justify-content-between align-items-center">
                  <label>Insert Title</label>
                  <input type="text" className="form-control" onChange={this.changeTitle}/>
                </div>
                <div className="justify-content-between align-items-center">
                  <label>Insert Body</label>
                  <input type="text" className="form-control" onChange={this.changeBody}/>
                </div>
              </div>
              <div className="d-flex flex-start align-items-center">
              <button className="btn btn-success mr-2 " type="button" onClick={this.addPostToCurrentUser}>Add</button>
              <button className="btn btn-secondary " type="button" onClick={this.closeModal}>close</button>
              </div>
            </form>
          </Modal>
        </div>
      );
    }

}

export default PostModal;
