// import logo from './logo.svg';
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
  const weatherCard = (
    // <day></day>
    // <img/>
    // <temps>
    //   <high></high>
    //   <low></low>
    // </temps>
    <div className="weatherCard">
      <h2>Day</h2>
      <img src="https://openweathermap.org/img/wn/11d@2x.png" alt="Weather Icon" width="100" height="100" />
      <span className="tempNumbers">
        <h2>100*</h2>
        <h2>10*</h2>
      </span>
    </div>
  )  
    
  return (
    <div className="App">
      {title}
      {location}
      {weatherCard}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
