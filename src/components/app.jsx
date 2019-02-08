import React from "react";
import CityList from "../containers/city_list";
import ActiveCity from "../containers/active_city";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="left-scene">{<CityList />}</div>
        <div className="right-scene">{<ActiveCity />}</div>
      </div>
    );
  }
}

export default App;
