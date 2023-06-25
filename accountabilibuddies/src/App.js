import './App.css';
import Dashboard from './components/Dashboard.component';
import MenuDrawer from './components/MenuDrawer.component';

function App() {
  return (
    <div className="App">
      <MenuDrawer/>
      <header className="App-header">
        <h2>
          Welcome to AccountibiliBuddies
        </h2>
          (Accountable to no one, except your friends!) {/* have this generate from a list, minecraft style */}
      </header>
      <Dashboard/>
    </div>
  );
}

export default App;
