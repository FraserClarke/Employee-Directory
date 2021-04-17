// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import utils from "./utils/API.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import React from "react";
import "./style.css";
import API from "../utils/API";
// Using the datalist element we can create autofill suggestions based on the props.employees array

class Search extends Component {
  state = {
    randomUsers: [{}],
    filterUsers: [{}],
    orderUsers: {ascending},
  };

  // When the component mounts, get a list of all available base employees and update this.state.employees
  componentDidMount() {
    API.getRandomUser()
      .then((res) => this.setState({ name: res.data.message }))
      .catch((err) => console.log(err));
  };
//   loadNextUser = () => {
//     API.getRandomUser()
//       .then(res =>
//         this.setState({
//           picture: res.data.message
//         })
//       )
//       .catch(err => console.log(err));
//   };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
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
     
        <Router>
      <div>
        <Navbar />
        <SearchBar/>
        <Table/>{/* <Route exact path="/" component={About} /> */}
       
        {/* <Footer /> */}
      </div>
    </Router>
      
    );
  }
}

export default App;

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
