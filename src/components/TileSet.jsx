var React = require('react'),
    TradeTile = require('./TradeTile.jsx');

 require('./TileSet.css');   

class TileSet extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      count: 1
    };
  }
  render() {
    var tiles = [];
    for (var i = 0; i < this.state.count; i++) {
        tiles.push(<TradeTile id={i} key={i} ref={'ref'+i}/>)
    }
    
    return <div className="TileSet">
      <h1>Tile Set</h1><button onClick={this.onClick}>+</button>
      {tiles}
    </div>
  }
  onClick() {
    this.setState({count: this.state.count + 1});
  }
}

module.exports = TileSet;