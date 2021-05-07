import logo from './logo.svg';
import './App.css';
import FetchData from './FetchData.js';
import Navigation from './Navigation.js';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <FetchData/>
    </div>
  );
}

export default App;
