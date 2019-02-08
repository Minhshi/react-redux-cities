import React from "react";
import City from "./city";

class CityList extends React.Component {
  render() {
    return (
      <div>
        {this.props.cities.map(city => {
          return <City city={city} key={city.name} />;
        })}
      </div>
    );
  }
}

export default CityList;
