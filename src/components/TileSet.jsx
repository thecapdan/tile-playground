var React = require('react'),
    TradeTile = require('./TradeTile.jsx');

 require('./TileSet.css');   

class TileSet extends React.Component {
  render() {
    var tiles = [];
    for (var i = 0; i < this.props.count; i++) {
        tiles.push(<TradeTile key={i} ref={'ref'+i}/>)
    }
    
    return <div className="TileSet">
      <h1>Tile Set</h1>
      {tiles}
    </div>
  }
}

module.exports = TileSet;