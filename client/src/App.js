import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
// import Education from "./pages/Education";
import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
// import Profile from "./pages/ProfileBuilder";
import LandingPage from "./pages/LandingPage";

import Footer from "./components/Footer";
import MobileNavbar from "./components/MobileNavbar";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";

function App() {
    return (
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/landingpage" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path= "/SignUp" component = {SignUp} />
        <Route path= "/Login" component = {Login} />
        <MobileNavbar />
        <Footer />
      </Router >
    );
}
  

export default App;