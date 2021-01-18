import React from 'react';
import Modal from 'react-modal';
import {API_URL_POST_POSTS} from "./api.js";

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

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
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
  // const [modalIsOpen,setIsOpen] = React.useState(false);
  openModal = () => {
    this.setState({
      modalIsOpen : true
    })
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    console.log("hello");
    // this.setState({
    //   subtitle : subtitle.style.color = '#f00'
    // })

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
    // setIsOpen(false);
    this.setState({
      modalIsOpen : false
    })
  }
    render(){
      return (
        <div>
          <button onClick={this.openModal}>Add Post</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <h2>Specify:</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <label>Insert Title</label>
              <input type="text" onChange={this.changeTitle}/>
              <label>Insert Body</label>
              <input type="text" onChange={this.changeBody}/>
              <button onClick={this.addPostToCurrentUser}>Add</button>
            </form>
          </Modal>
        </div>
      );
    }

}

export default PostModal;

// import React from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
//
// export default () => (
//   <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>
// );
