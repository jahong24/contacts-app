import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import reducers from "./reducers";
import ContactsIndex from "./components/contacts_index";
import ContactsShow from "./components/contacts_show";
import ContactsNew from "./components/contacts_new";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route path="/contacts/new" component={ContactsNew} />
          <Route path="/contacts/:id" component={ContactsShow} />
          <Route path="/" component={ContactsIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
