import * as React from 'react'
import { Route, Redirect } from "react-router-dom";
import {useSelector} from 'react-redux';


const GuardRoute = ({children, ...rest}) => {
  
  let { user } = useSelector(state => state.auth);

  return <Route {...rest}>
    {user.role === 'admin' ? children : <Redirect to="/" />}
  </Route>
};
export default GuardRoute;