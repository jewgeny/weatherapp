import React from "react";

class Messages extends React.Component{
   render(){
     return(
       <React.Fragment>
       <div className="container my-3">
          {this.props.doubleText && <div className="alert alert-danger">This City exist already!</div>}
       </div>
       </React.Fragment>
     )
   }
}

export default Messages;
