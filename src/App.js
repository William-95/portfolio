import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SetContext from "./SetContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SetContext>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects/" component={Projects} />
            <Route path="/contact/" component={Contact} />
            <Route exact path="*" component={Error} />
          </Switch>
        </Router>
        <Footer />
      </SetContext>
    </>
  );
}

export default App;
