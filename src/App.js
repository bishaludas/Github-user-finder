import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import User from "./components/users/User";
import axios from "axios";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
  }

  render() {
    const name = "Bishal Udash";
    const getAge = () => "24";
    const loading = false;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <User />
          {loading ? "Loading" : "Hello " + name.toUpperCase()}
          <p>{getAge()}</p>
        </div>
      </div>
    );
  }
}

export default App;
