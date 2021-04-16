// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import utils from "./utils/API.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";

function App() {
  utils.getRandomUser().then((data) => console.log(data));

  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Table>{/* <Route exact path="/" component={About} /> */}</Table>
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
