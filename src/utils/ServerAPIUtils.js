'use strict';

var ServerActionCreators = require('../actions/ServerActionCreators');

var ServerAPIUtils = {
    getItems: function() {
        var request = new XMLHttpRequest();
        request.open('GET', './data/prices.json', true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var components = JSON.parse(request.responseText);
                ServerActionCreators.receiveAll(components);
            } else {
            	console.log('Error retrieving the data');
            }
        };

        request.onerror = function() {
            console.log('Error retrieving the data');
        };

        request.send();
    }
};

module.exports = ServerAPIUtils;