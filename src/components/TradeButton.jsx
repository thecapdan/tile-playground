var React = require('react');

require('./TradeButton.css');

class TradeButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      disabled: false
    };
    this.buttonStyle = { backgroundColor: props.colour };
  }
  render() {
    return <button style= {this.buttonStyle}
                   type="button"
                   disabled={this.state.disabled}
                   className="TradeButton"
                   onClick={this.onClick}>
                   {this.props.side}{' '}
                   {this.props.price}
    </button>;
  }
  onClick() {
    this.setState({disabled: true});
  }
}

module.exports = TradeButton;