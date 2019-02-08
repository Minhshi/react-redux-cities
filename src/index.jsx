import React from "react";
import ReactDOM from "react-dom";

import "../assets/stylesheets/application.scss";

import App from "./components/app";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<App/>, root);
// }

import citiesReducer from "./reducers/cities_reducer";
const reducers = combineReducers({
  cities: citiesReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
