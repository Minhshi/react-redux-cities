import React from "react";

class City extends React.Component {
  render() {
    return <div className="city">{this.props.city.name}</div>;
  }
}

export default City;
