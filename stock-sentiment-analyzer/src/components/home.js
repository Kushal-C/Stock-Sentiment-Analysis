import React, { Component } from "react";
import Card from "./card";
import Search from "./search";
import "../css/styles.css";
class Home extends Component {
  render() {
    return <div>
        <div className="navbar">
          <h2 className="inline navbar">Popular</h2>
         <Search searchTicker={()=> console.log("Searched")} />
        </div>
        <ul className="card-container" style={{marginLeft: "-28px"}}>
          <li className="card shadow" />
        </ul>
      </div>;
  }
}

export default Home;
