import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotWorking from "./components/PageNotWorking";
import Form from "./components/Form";

class App extends Component {

  state = {
    students: [
        {name: "Student1", country: "Italy", id: 1},
        {name: "Student2", country: "France", id: 2},
        {name: "Student3", country: "Spain", id: 3},
        {name: "Student4", country: "Norway", id: 4},    
    ],
}

  addStudent = student => {
    student.id = Math.random();
    this.setState({ students: [...this.state.students, student] });
  }

  removeStudent = studentId => {
    const newState = this.state.students.filter(student => student.id !== studentId);
    this.setState({ students: newState });
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/">
            <Home students={this.state.students} removeStudent={this.removeStudent}/>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/pagenotworking" component={PageNotWorking} />
          <Route path="/form">
            <Form addStudent={this.addStudent} />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
