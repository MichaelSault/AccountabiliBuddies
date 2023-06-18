import './App.css';

import MainCard from './components/MainCard.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Welcome to AccountibiliBuddies
        </h2>
          (Yes, we know that's a mouthful!)
      </header>

      {/* table will be auto generated from db with the map function */}
      <table width={'80%'} align='center'>
        <tr>
          <td><MainCard title="100 Days of Code" secondary="day 164" background="#006699"/></td>
          <td><MainCard title="Read Before Bed" secondary="day 018" background="#663366"/></td>
        </tr>
        <tr>
          <td><MainCard title="Get 8 hours of sleep" secondary="daily" background="firebrick"/></td>
          <td><MainCard title="Mow the Lawn" secondary="weekly" background="darkgreen"/></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
