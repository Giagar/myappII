import React, {Component} from "react";

class Form extends Component {
    state = {};

    handleSubmit = () => {
        console.log("submit works")
    } 

    render() {
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Your name" />
                    <label htmlFor="country">Country: </label>
                    <input type="text" name="country" id="country" placeholder="Country of origin" />
                    <button className="btn btn-outline-success">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;