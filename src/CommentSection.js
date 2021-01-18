import React from 'react';


class CommentSection extends React.Component{
  constructor(){
    super()

    this.state = {

    }
  }

  render(){
    // console.log("Props",props);
    const { comment } = this.props;
    return(
      <div>
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">{comment.name}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">{comment.body}</p>



          </div>



        </div>
      </div>

      </div>

    );
  }
}

export default CommentSection;
