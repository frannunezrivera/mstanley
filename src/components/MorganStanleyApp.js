'use strict';

var React = require('react/addons');
var ServerAPIUtils = require('../utils/ServerAPIUtils');
var ComponentSection = require('./ComponentSection');


// CSS
require('normalize.css');
require('../styles/main.css');

ServerAPIUtils.getItems();

var MorganStanleyApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
      	<ComponentSection />
      </div>
    );
  }
});

module.exports = MorganStanleyApp;
