import cities from "../cities";

export function setCities() {
  return {
    type: "SET_CITIES",
    payload: cities
  };
}
