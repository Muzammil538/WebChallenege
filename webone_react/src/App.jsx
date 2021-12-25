import './App.css';
import Home from "./Components/Home";
import { BrowserRouter as  Switch, Route} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Courses from "./Components/Courses"
 
function App() {
  return (
    <>
      <Switch>
        <Route path="/." component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/courses" component={Courses}/>
      </Switch>
    </>
  );
}

export default App;
