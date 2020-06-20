import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <Link to="/dashboard">Dashboard</Link>
      <Switch>
        <PrivateRouter path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
