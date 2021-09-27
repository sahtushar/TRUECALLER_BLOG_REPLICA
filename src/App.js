import { useEffect } from "react";
import Header from "./components/header";
import MainSection from "./components/mainSection";
import Post from "./components/post";
import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Header />
            <MainSection />
          </div>
        </Route>
        <Route path="/post/:slug" component={Post} />
      </Switch>
    </Router>
  );
}
