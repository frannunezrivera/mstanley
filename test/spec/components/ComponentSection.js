'use strict';

describe('ComponentSection', function () {
  var React = require('react/addons');
  var ComponentSection, component;

  beforeEach(function () {
    ComponentSection = require('components/ComponentSection.js');
    component = React.createElement(ComponentSection);
  });

  it('should create a new instance of ComponentSection', function () {
    expect(component).toBeDefined();
  });
});
