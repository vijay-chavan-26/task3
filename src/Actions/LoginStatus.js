import { LOGGED_IN, LOGGED_OUT } from "../Components/Constants"

export const handleLogin = () =>{
    return{
        type: LOGGED_IN
    }
}

export const handleLogout = () =>{
    return{
        type: LOGGED_OUT
    }
}