import React, {Component} from "react";
import StudentsUI from "./StudentsUI";

class Home extends Component {
    state = {
        students: [
            {name: "Student1", country: "Italy", id: 1},
            {name: "Student2", country: "France", id: 2},
            {name: "Student3", country: "Spain", id: 3},
            {name: "Student4", country: "Norway", id: 4},    
        ],
    }

    addStudent = newStudent => {
        this.setState({students: [...this.state.students, newStudent]})
    }

    render() {
        return(
            <div className="home">
                <h1>Home</h1>
                <StudentsUI students={this.state.students} />
            </div>
        )
    }
}

export default Home;