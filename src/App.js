import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Register from './components/Register'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
// import BNavbar from './components/BNavbar'
// import Files from './components/File'
// import Dashboard from './components/dashboard/Dashboard'
import Main from './components/main/Main'
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
        <Route path='/register' component={Register} exact></Route>
        <Route path='/login' component={Login} exact></Route>
        <Route path='/signup' component={Signup} exact></Route>
        {/* <Route path='/doc' component={Files} exact></Route> */}
        <PrivateRoute path='/' component={Main}></ PrivateRoute>
        
      </Switch>
      {/* <BNavbar /> */}
    </div>
  );
}

export default App;
