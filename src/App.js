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
  filterEmployees() {}
  sortName = (event) => {
    if(this.state.sortName){
      this.setState({
        employeesOrdered: this.sortNameAscending(this.state.employees),
        sortName: false
      })
    }
    else {
      this.setState({
        employeesOrdered: this.sortNameDescending(this.state.employees),
        sortName: false
      })
    }
  };
  sortNameAscending =(employees) => {
    employees.sort(function(a, b){
    if(a.firstname < b.firstname) { return -1; }
    if(a.firstname > b.firstname) { return 1; }
    return 0;
})
  }
  sortNameDescending =(employees) => {
  }
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
        <Table employees={this.state.employeesOrdered} sortName={this.sortName} />
        {/* <Footer /> */}
      </div>
      // </Router>
    );
  }
}
export default App;
//   loadNextUser = () => {
//     API.getRandomUser()
//       .then(res =>
//         this.setState({
//           picture: res.data.message
//         })
//       )
//       .catch(err => console.log(err));
//   };
// function SearchForm(props) {
//   return (
//     <form className="search">
//       <div className="form-group">
//         <label htmlFor="employee">employee Name:</label>
//         <input
//           value={props.search}
//           onChange={props.handleInputChange}
//           name="employee"
//           list="employees"
//           type="text"
//           className="form-control"
//           placeholder="Type in a dog employee to begin"
//           id="employee"
//         />
//         <datalist id="employees">
//           {props.employees.map((employee) => (
//             <option value={employee} key={employee} />
//           ))}
//         </datalist>
//         <button
//           type="submit"
//           onClick={props.handleFormSubmit}
//           className="btn btn-success"
//         >
//           Search
//         </button>
//       </div>
//     </form>
//   );
// }
// export default SearchForm;
// function App() {
//   utils.getRandomUser().then((data) => console.log(data));
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Table>{/* <Route exact path="/" component={About} /> */}</Table>
//         </Wrapper>
//         {/* <Footer /> */}
//       </div>
//     </Router>
//   );
// }
// export default App;