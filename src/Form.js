import React, {Component} from "react";
import Messages from "./Messages";

class Form extends Component{
  render(){
     return(
        <>
                    <form className="my-5" onSubmit={this.props.getCity}>
                        <div className="d-flex input-group">
                          <input placeholder="Type a city here" type="text" onChange={this.props.updateValue} className="form-control"/>
                          <div className="input-group-append">
                             <button className="btn btn-primary" type="submit">Search</button>
                          </div>
                       </div>
                         <Messages doubleText={this.props.doubleText} />
                    </form>

        </>
     )
  }
}

export default Form;
