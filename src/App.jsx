import React from "react";
import "./App.css";

import MapRender from "./components/Yamap.jsx";

class App extends React.Component {
  state = {
    men: "Объекты на карте"
  };

  render() {
    return (
      <div className="body">
        <h1> {this.state.men}</h1>
        <MapRender />
      </div>
    );
  }
}

export default App;
