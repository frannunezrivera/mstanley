'use strict';

describe('MorganStanleyApp', function () {
  var React = require('react/addons');
  var MorganStanleyApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MorganStanleyApp = require('components/MorganStanleyApp.js');
    component = React.createElement(MorganStanleyApp);
  });

  it('should create a new instance of MorganStanleyApp', function () {
    expect(component).toBeDefined();
  });
});
