import React, {Component} from "react";
import StudentsUI from "./StudentsUI";

class Home extends Component {
    
    addStudent = newStudent => {
        this.setState({students: [...this.state.students, newStudent]})
    }

    render() {

        console.log(this.props.students)
        return(
            <div className="home">
                <h1>Home</h1>
                <StudentsUI students={this.props.students} removeStudent={this.props.removeStudent} />
            </div>
        )
    }
}

export default Home;