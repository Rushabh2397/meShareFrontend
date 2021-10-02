import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
// import BNavbar from './components/BNavbar'
// import Files from './components/File'
// import Dashboard from './components/dashboard/Dashboard'
import Main from './components/main/Main'
import ChangePassword from './components/changePassword/ChangePassword'
import './config/AxiosConfig'
import { PrivateRoute } from './components/PrivateRoute'
import { Toaster } from 'react-hot-toast';
import './App.css'
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Toaster/>
      {/* <Main/> */}
      {/* <Dashboard/> */}
      <Switch>

        <Route path='/login' component={Login} exact></Route>
        <Route path='/signup' component={Signup} exact></Route>
        {/* <Route path='/doc' component={Files} exact></Route> */}
        <PrivateRoute path='/home' component={Main} exact></ PrivateRoute>
        <PrivateRoute path='/' component={Main} exact></ PrivateRoute>
        <PrivateRoute path='/change-password' component={ChangePassword} exact></PrivateRoute>
        
      </Switch>
      {/* <BNavbar /> */}
    </div>
  );
}

export default App;
