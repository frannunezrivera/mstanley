'use strict';

describe('Component', function () {
  var React = require('react/addons');
  var Component, component;

  beforeEach(function () {
    Component = require('components/Component.js');
    component = React.createElement(Component);
  });

  it('should create a new instance of Component', function () {
    expect(component).toBeDefined();
  });
});
