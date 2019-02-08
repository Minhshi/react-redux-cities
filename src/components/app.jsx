import React from "react";
import CityList from "../containers/city_list";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="left-scene">{<CityList />}</div>
        <div className="right-scene" />
      </div>
    );
  }
}

export default App;
