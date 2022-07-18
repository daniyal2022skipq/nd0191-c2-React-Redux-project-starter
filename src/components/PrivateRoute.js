import {Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({children}) => {
    const loggedIn=useSelector(state=>state.auth.authUser)
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];

    return loggedIn ? children : <Navigate to={`/?redirectTo=${redirectUrl}`}/>;
};



export default PrivateRoute;