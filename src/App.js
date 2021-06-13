import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import BNavbar from './components/BNavbar'
import Images from './components/Images'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/register' component={Register} exact></Route>
        <Route path='/login' component={Login} exact></Route>
        <Route path='/images' component={Images} exact></Route>
      </Switch>
      <BNavbar/>
    </div>
  );
}

export default App;
