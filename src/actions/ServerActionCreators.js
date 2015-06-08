'use strict';

var AppDispatcher = require('../dispatcher/MorganStanleyAppDispatcher');

var ServerActionCreators = {
	receiveAll: function(components){
		AppDispatcher.dispatch({
			type: 'RECEIVE_COMPONENTS',
			components: components
		});
	}
};

module.exports = ServerActionCreators; 
