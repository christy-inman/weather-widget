import logo from './logo.svg';
import './App.css';

function App() {
  const APIKey = '07044227d9234698621b6155df79c11c'
  
  const title = <h1>Hello Weather</h1>
  const cityName = 'Denver'
  const stateCode = 'CO'
  const location = (
    <h2>
      {cityName}, {stateCode}
    </h2>)
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {title}
      {location}
    </div>
  );
}

export default App;
