import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Home  from "./components/pages/Home/Home";
import  Courier  from "./components/pages/Courier/Courier";
import  Customer  from "./components/pages/Customer/Customer";
import Login from "./components/pages/Login/Login";
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Courier' exact component={Courier}/>
        <Route path='/Customer' exact component={Customer}/>
        <Route path='/Login' exact component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
