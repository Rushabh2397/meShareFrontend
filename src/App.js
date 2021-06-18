import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import BNavbar from './components/BNavbar'
import Files from './components/File'
import './config/AxiosConfig'
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/register' component={Register} exact></Route>
        <Route path='/login' component={Login} exact></Route>
        <PrivateRoute path='/doc' component={Files} exact></PrivateRoute>
        
      </Switch>
      <BNavbar />
    </div>
  );
}

export default App;
