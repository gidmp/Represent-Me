import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Returning from "./pages/Returning";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;