import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
// import Education from "./pages/Education";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Profile from "./pages/ProfileBuilder";
import LandingPage from "./pages/LandingPage";
// import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import MobileNavbar from "./components/MobileNavbar";

function App() {
    return (
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/landingpage" component={LandingPage} />
        <Route path="/about" component={About} />
        <MobileNavbar />
        <Footer />
      </Router >
    );
}
  

export default App;