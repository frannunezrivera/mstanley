'use strict';

var React = require('react/addons');
var ReactPropTypes = React.PropTypes;
var moment = require('moment');

require('styles/Component.less');

var Component = React.createClass({
	propTypes: {
        component: ReactPropTypes.object
    },

    _onButtonClick: function(event){
    	console.log(event.target.value);
    },

	render: function () {
		var data = this.props;
		var date = moment(data.priceHistoricalDate, "YYYY-MM-DD").format("MMM YYYY");
		var self = this;

		return (
		    <div className="Component">
		    	<div className="ComponentBody">
			    	<h3>Request Price</h3>
					<sup>{data.symbol} {data.priceHistorical} {date}</sup>
					<ul className="actions">
						{(data.actions || []).map(function(value) {
						    return <li key={value}><button onClick={self._onButtonClick} value={value}>{value}</button></li>;
						})}
					</ul>
				</div>
				<div className="ComponentPrice">
					<span className="price">{data.priceIndicative}</span>
				</div>
		    </div>
		);
	}
});

module.exports = Component; 

