import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
