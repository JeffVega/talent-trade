import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import contactsMain from "../Contacts/contactsMain";
import teacherProfile from "../Teacher/teacherProfile";
import teacherSearch from "../Teacher/teacherSch";
import Homepage from '../Homepage/Homepage';
import DashboardPage from '../Dashboard/DashboardPage';
import MeetupMain from "../Meetup/meetupMain";
import LoginSignup from "../LoginSignup/LoginSignup";

export default function Index() {
  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/contacts" component={contactsMain} />
          <Route exact path="/meetup" component={MeetupMain} />
          <Route exact path="/teacherProfile" component={teacherProfile} />
          <Route exact path="/teacherSearch" component={teacherSearch} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/login" component={LoginSignup} />
        </Switch>
      </div>
    </Router>
  );
}
