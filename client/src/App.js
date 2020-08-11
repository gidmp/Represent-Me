import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Education from "./pages/Education";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import MobileNavbar from "./components/MobileNavbar";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute/UnauthenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
// import SignUp from "./components/SignUp";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  // useEffect(() => {
  //   onLoad();
  // }, []);

  // async function onLoad() {
  //   try {
  //     await Auth.currentSession();
  //     userHasAuthenticated(true);
  //   } catch (err) {
  //     alert(err);
  //   }
  // }

  return (
    <Router>
      {/* <Switch>
        <Route component={About} />
        <UnauthenticatedRoute
          path="/login"
          component={Login}
          appProps={{ isAuthenticated }}
        />
        <AuthenticatedRoute
          path="/landingpage"
          component={LandingPage}
          appProps={{ isAuthenticated }}
        />
        <Route component={Login} />
<<<<<<< HEAD
      </Switch>
=======
      </Switch> */}
>>>>>>> 2afc9b652d9324bb4c93f446ff2e6727a573f3b7
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/education" component={Education} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/landingPage" component={LandingPage} />

      <MobileNavbar />
      <Footer />
    </Router>
  );
}

export default App;
