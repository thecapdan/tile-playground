var React = require('react');

require('./CurrencySelector.css');

var CurrencySelector = React.createClass({
  getInitialState: function() {
    return {
             value: null
    }
  },
  change: function(event) {
    this.setState({value: event.target.value});
    this.props.handleChange(event.target.value);
  },
  render: function() {
    var currs = [];
    for (var i = 0; i < this.props.options.length; i++) {
      currs.push(<option key={i} value={this.props.options[i]}>{this.props.options[i]}</option>);
    }
    return <select className="CurrencySelector" type="select" label="currency" onChange={this.change}>
              {currs}
        </select>;
    }
});

module.exports = CurrencySelector;