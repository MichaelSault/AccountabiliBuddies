import './App.css';

import MainCard from './components/MainCard.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Welcome to AccountibiliBuddies
        </h2>
          (Yes we know that's a mouthful)
      </header>

      <MainCard title="habits" secondary="mark as completed"/>
    </div>
  );
}

export default App;
