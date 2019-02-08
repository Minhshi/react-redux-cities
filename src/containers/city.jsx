import React from "react";

class City extends React.Component {
  render() {
    return <div>{this.props.city.name}</div>;
  }
}

export default City;
