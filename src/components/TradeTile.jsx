var React = require('react'),
    TradeButton = require('./TradeButton.jsx'),
    TradeSummary = require('./TradeSummary.jsx'),
    CurrencySelector = require ('./CurrencySelector.jsx');

require('./TradeTile.css');

module.exports = React.createClass({
  getInitialState: function() {
        return {
          currencies :  ["GBPUSD", "USDJPY", "EURUSD"],
          currencyPrices : { "GBPUSD" : ["1.5775","1.5780"], "USDJPY" : ["117.00","117.50"] , "EURUSD" : ["1.0945","1.0950"]},
          selectedCurrency: "GBPUSD",
          tradeState : 'Initial'
        };
  },
  updateCurrency : function(currency) {
    this.setState({selectedCurrency : currency});
  },
  updateAmmount : function() {

  },

  render: function() {
    return (
      <div className="TradeTile">
          <h2 className="title">Trade Tile {this.props.id + 1}</h2>
          <div className="tradeDeets">
            Currency: <CurrencySelector options={this.state.currencies} handleChange={this.updateCurrency}/><br/>
            Amount: <input type="text" onChange={this.updateAmmount}/>
          </div>
          <div className="tradeButtons">
            <TradeButton 
                    colour="blue" 
                    side="SELL"
                    price={this.state.currencyPrices[this.state.selectedCurrency][0]}
                    />
            <TradeButton 
                  colour="red" 
                  side="BUY"
                  price={this.state.currencyPrices[this.state.selectedCurrency][1]}  />
          </div>
          <TradeSummary state={'Initial'} 
                        currency={this.state.selectedCurrency}
                        buyPrice={this.state.currencyPrices[this.state.selectedCurrency][1]}
                        sellPrice={this.state.currencyPrices[this.state.selectedCurrency][0]}
                        />
      </div>
      );
  }
});
