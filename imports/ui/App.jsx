import React from 'react';
import { withTracker } from "meteor/react-meteor-data";
import Register from "../../imports/api/register";

const App = (props) => {
  const buttonOnClick = () => {
    Meteor.call('updateDate');
  }
  return (
  <div>
    <h1>Welcome to Meteor!</h1>
    <ul>
      {
        (props.register && props.register.length) ? props.register.map((node) => {
          return <li key={node.id}>{node.name}: {node.tel}</li>
        }) : null
      }
    </ul>
    <button onClick={buttonOnClick}>Update</button>
  </div>
)};

export default withTracker((props) => {
  Meteor.subscribe("register");
  return {
    register: Register.find().fetch()
  }
})(App);
