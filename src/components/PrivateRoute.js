import {Route,Redirect} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'


export let PrivateRoute= ({ path,...props })=> {

    const { user } = useAuth();
    return user.token ? (
      <Route  {...props} path={path}/>
    ) : (
      <Redirect to= "/login"/>
    )
}