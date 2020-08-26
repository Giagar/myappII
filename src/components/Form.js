import React, {Component} from "react";

class Form extends Component {
    state = {};

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit works")
    }
    
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    render() {
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Your name" required onChange={this.handleChange} />
                    <label htmlFor="country">Country: </label>
                    <input type="text" name="country" id="country" placeholder="Country of origin" required onChange={this.handleChange} />
                    <button className="btn btn-outline-success">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;