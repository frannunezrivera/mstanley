'use strict';

var React = require('react/addons');
var ComponentStore = require('../stores/ComponentStore');
var ServerActionCreators = require('../actions/ServerActionCreators');
var Component = require('./Component');

require('styles/ComponentSection.less');

function getStateFromStores() {
	return {
		components: ComponentStore.getAll(),
	};
}

function getComponents(component, index) {
	var data = component.data;
	
    return (
        <Component key={index} symbol={data.symbol} priceIndicative={data.price.indicative} priceHistorical={data.price.historical[0].value} priceHistoricalDate={data.price.historical[0].date} actions={component.actions} />
    );
}

var ComponentSection = React.createClass({
	getInitialState: function() {
    	return getStateFromStores();
  	},

  	componentDidMount: function() {
    	ComponentStore.addChangeListener(this._onChange);
  	},
  	
  	_onChange: function() {
    	this.setState(getStateFromStores());
  	},
  	
  	render: function () {
  		if (!this.state.components.length){
            return (
                <div className="ComponentSection">
		          	<span>Loading components...</span>
	        	</div>
            );
        }

        var components = this.state.components.map(getComponents);

		return (
			<div className="ComponentSection">
			  	<ul className="component-list" ref="componentList">
	          		{components}
	        	</ul>
			</div>
		);
  }
});

module.exports = ComponentSection; 

