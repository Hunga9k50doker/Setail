import logo from './logo.svg';
import './App.scss';

function App() {
  let name ="hung";
  return (
    <div className="App">
      <header className="App-header">
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello {name}
        </a>
      </header>
    </div>
  );
}

export default App;
