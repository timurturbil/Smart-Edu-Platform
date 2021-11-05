import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./views/about";
import Blog from "./views/blog";
import BlogSingle from "./views/blog-single";
import Contact from "./views/contact";
import Courses from "./views/courses";
import Dashboard from "./views/dashboard";
import Home from "./views/home";
import Pricing from "./views/pricing";
import Teachers from "./views/teachers";

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}

export default class App extends React.Component {

  state = {
    loading: true
  };
  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  render() {
    const { loading } = this.state;
    if (loading) { 
      return <div id="preloader">
        <div className="loader-container">
          <div className="progress-br float shadow">
            <div className="progress__item"></div>
          </div>
        </div>
      </div>; 
    }
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/index">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/blog-single">
              <BlogSingle />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/courses">
              <Courses />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/teachers">
              <Teachers />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }

}
