var React = require('react');

require('./TradeSummary.css');

class TradeSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
  }
  render() {
    return <p className="TradeSummary">Summary: 
    </p>;
  }
}

module.exports = TradeSummary;