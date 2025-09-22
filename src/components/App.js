import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route path="/items/:id" component={ItemDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
