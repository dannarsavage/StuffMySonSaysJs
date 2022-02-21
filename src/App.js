import './App.css';
import React from 'react';
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state =
      {
        AgeWhenUttered: 0,
        QuoteText: "This is hard-coded",
        BeforeAction: null,
        AfterAction: null      
      }
  }

  async componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.getQuote}>Get another quote</button>
          <QuoteFromMySon
            AgeWhenUttered = {this.state.AgeWhenUttered}
            QuoteText = {this.state.QuoteText}
            BeforeAction = {this.state.BeforeAction}
            AfterAction = {this.state.AfterAction}
          />
        </header>
      </div>
      );
  }

  getQuote = async () => {
    let response = await axios.get("https://localhost:7210/quotes/random", {
      headers: {
        'Accept': 'application/json'
      }
    });
    console.log(response.data)
    this.setState(
      () => ({
        AgeWhenUttered: response.data.ageWhenUttered,
        QuoteText: response.data.quoteText,
        BeforeAction: response.data.beforeAction,
        AfterAction: response.data.afterAction
      }),
      () => ({})
    );
  }
}

function QuoteFromMySon(props) {
  const ageWhenUttered = props.AgeWhenUttered;
  const quoteText = props.QuoteText;
  const beforeAction = props.BeforeAction;
  const afterAction = props.AfterAction;
  return (
    <div className="ThingMySonSaid">
      <p>He was {ageWhenUttered} years old when ...</p>
      <p>{beforeAction}</p>
      <p>{quoteText}</p>
      <p>{afterAction}</p>
    </div>
  )
}

async function fetchQuote() {
  //let response = await fetch("https://icanhazdadjoke.com");
  //let response = await fetch("https://localhost:7210/quotes/3");
  return React.createElement(
    QuoteFromMySon, 
    {
      AgeWhenUttered: 65,
      QuoteText: "This is hard-coded",
      BeforeAction: null,
      AfterAction: null
    }
  );
}

export default App;
