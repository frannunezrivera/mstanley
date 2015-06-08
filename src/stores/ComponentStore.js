'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var MorganStanleyAppDispatcher = require('../dispatcher/MorganStanleyAppDispatcher');

var CHANGE_EVENT = 'change';

var _components = {};

var ComponentStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    getAll: function() {
        return _components;
    }
});

ComponentStore.dispatchToken = MorganStanleyAppDispatcher.register(function(action) {

    switch (action.type) {
        case "RECEIVE_COMPONENTS":
            _components = action.components;
            ComponentStore.emitChange();
            break;

        default:
    }

});

module.exports = ComponentStore;