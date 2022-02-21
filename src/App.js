//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuoteFromMySon
          AgeWhenUttered="65"
          QuoteText="This is hard coded"
          BeforeAction={null}
          AfterAction={null}
        />
      </header>
    </div>
  );
}

function QuoteFromMySon(props) {
  const ageWhenUttered = props.AgeWhenUttered;
  const quoteText = props.QuoteText;
  const beforeAction = props.BeforeAction;
  const afterAction = props.AfterAction;
  return (
    <div className="ThingMySonSays">
      <p>Age {ageWhenUttered}</p>
      <p>{beforeAction}</p>
      <p>{quoteText}</p>
      <p>{afterAction}</p>
    </div>
  )
}

export default App;
