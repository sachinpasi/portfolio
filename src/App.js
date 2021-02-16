import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { React, useState } from "react";
import Footer from "./Components/Footer";
import Herosection from "./Components/Herosection";
import About from "./Components/Pages/About";
import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Project from "./Components/Pages/Project";
import NetflixClone from "./Components/Pages/Projects/NetflixClone";
import TinderClone from "./Components/Pages/Projects/TinderClone";

import INotes from "./Components/Pages/Projects/INotes";
import Contact from "./Components/Pages/Contact";
import AdminLogin from "./Components/Pages/AdminLogin";
import { UserContext } from "./Context";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseApp from "./Firebase";
import AdminDashboard from "./Components/Pages/AdminDashboard";
import Messages from "./Components/Pages/Messages";
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Project" component={Project} />
            <Route
              exact
              path="/Project/Netflix-Clone"
              component={NetflixClone}
            />
            <Route exact path="/Project/Tinder-Clone" component={TinderClone} />
            <Route exact path="/Project/iNotes" component={INotes} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/AdminLogin" component={AdminLogin} />
            <Route exact path="/AdminDashboard" component={AdminDashboard} />
            <Route exact path="/Messages" component={Messages} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
