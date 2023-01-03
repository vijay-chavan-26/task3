import { LOGGED_IN, LOGGED_OUT } from "../Components/Constants";

const getLocalData = () => {
    let loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus === null) return false;
    else return loginStatus;
  };
  
const loginInitialState = getLocalData();

export const setLogin = (state = loginInitialState, action) => {
    switch (action.type) {
      case LOGGED_IN:
        return (state = true);
      case LOGGED_OUT:
        return (state = false);
      default:
        return state;
    }
  };