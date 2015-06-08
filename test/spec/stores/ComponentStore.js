'use strict';

describe('ComponentStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/ComponentStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
