import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from './User/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormData from './Form/Patient-form.js';
import Doctor from './Doctor/Doc-profile.js';
import Login from './Login/login.js';
import AddMed from './InputForm/prescription';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <UserInfo />
          </Route>
          <Route path="/form">
            <FormData />
          </Route>
          <Route path="/doctor">
            <Doctor />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/prescription">
            <AddMed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


ReactDOM.render(<App/>, document.getElementById('root'));
