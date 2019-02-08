import React from "react";
import { connect } from "react-redux";

class ActiveCity extends React.Component {
  render() {
    if (this.props.activeCity === null) {
      return <div className="active-city">Click on a City</div>;
    }
    const url = `https://kitt.lewagon.com/placeholder/cities/${
      this.props.activeCity.slug
    }`;
    return (
      <div className="active-city">
        <h1>{this.props.activeCity.name}</h1>
        <p>{this.props.activeCity.address}</p>
        <img src={url} alt={this.props.activeCity.name} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
