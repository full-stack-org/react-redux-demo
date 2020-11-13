import "./App.css";
import DisplayDataComponent from "./Components/DisplayDataComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/Router/About";
import Shop from "./Components/Router/Shop";
import Home from "./Components/Router/home";
import Nav from "./Components/Router/Nav";
import UserData from './Components/Router/UserData'
import NoData from './Components/Router/Nodata'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <DisplayDataComponent /> */}
        <Nav />
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path='/test/:id' component={UserData}></Route>
          <Route component={NoData}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
