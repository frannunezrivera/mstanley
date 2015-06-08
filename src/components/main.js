'use strict';

var MorganStanleyApp = require('./MorganStanleyApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={MorganStanleyApp}>
    <Route name="/" handler={MorganStanleyApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
