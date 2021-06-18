import {Route,Redirect} from 'react-router-dom'
import {useLogin} from './context'


export let PrivateRoute= ({ path,...props })=> {

    const { isLoggedIn } = useLogin();
    return isLoggedIn ? (
      <Route  {...props} path={path}/>
    ) : (
      <Redirect to= "/login"/>
    )
}