import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Education from "./pages/Education";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import MobileNavbar from "./components/MobileNavbar";

function App() {
    return (
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/landingpage" component={LandingPage} />
        <Route path="/about" component={About} />

        <Route path="/education" component={Education} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        <MobileNavbar />
        <Footer />
      </Router >
    );
}
  
export default App;