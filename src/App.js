// import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import utils from "./utils/API.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Search from "./components/Search";
// import "./style.css";
import API from "./utils/API";
// Using the datalist element we can create autofill suggestions based on the props.employees array
class App extends Component {
  state = {
    employees: [],
    employeesOrdered: [],
    filterUsers: [],
    searchValue: "",
    sortName: true,
  };
  // When the component mounts, get a list of all available base employees and update this.state.employees
  componentDidMount() {
    API.getRandomUser()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filterUsers: res.data.results,
        })
      )

      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ searchValue: event.target.value }, () =>
      this.filterEmployees()
    );
  };
  // filterEmployees() {}

  filterEmployees = () => {
    let filterUsers = this.state.searchValue;
    filterUsers = this.state.employees.filter((employees) => {
      console.log(employees);
      let employeesName =
        employees.name.first.toLowerCase() + employees.name.last.toLowerCase();
      return employeesName.indexOf(this.state.searchValue.toLowerCase()) !== -1;
    });
    this.setState({
      filterUsers: filterUsers,
    });
  };

  sortName = () => {
    if (this.state.sortName) {
      this.setState({
       // employees: this.sortNameAscending(this.state.employees),
        filterUsers: this.sortNameAscending(this.state.filterUsers),
        sortName: false
      });
    } else {
      this.setState({
        //employees: this.sortNameDescending(this.state.employees),
        filterUsers: this.sortNameDescending(this.state.filterUsers),
        sortName: true
      });
    }
  };
  sortNameAscending = (employees) => {
    employees.sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });
    return employees;
  };
  sortNameDescending = (employees) => {
    employees.sort(function (a, b) {
      if (a.name.first > b.name.first) {
        return -1;
      }
      if (a.name.first < b.name.first) {
        return 1;
      }
      return 0;
    });
    return employees;
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getDogsOfemployee(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };

  render() {
    return (
      // <Router>
      <div>
        <Navbar />
        <Search
          searchValue={this.state.searchValue}
          handleInputChange={this.handleInputChange}
        />
        <Table employees={this.state.filterUsers} sortName={this.sortName} />
        {/* <Footer /> */}
      </div>
      // </Router>
    );
  }
}

export default App;
