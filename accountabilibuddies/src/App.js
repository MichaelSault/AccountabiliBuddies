import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Navbar from './components/Navbar.component';

import HomePage from './components/HomePage.component';
import Dashboard from './components/Dashboard.component';
import FriendPage from './components/FriendPage.component';
import Friends from './components/Friends.component';
import Messages from './components/Messages.component';

import MenuDrawer from './components/MenuDrawer.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <h2>
          Welcome to AccountibiliBuddies
        </h2>
          (Accountable to no one, except your friends!) {/* have this generate from a list, minecraft style */}
      </header>

      <BrowserRouter>
        <Routes>
          <Route path='/'/>
          <Route path='/Home' element={<HomePage/>}/>
          <Route path='/Habits' element={<Dashboard />}/>
          <Route path='/Friends' element={<Friends />}/>
          <Route path='/Messages' element={<Messages />}/>
          <Route path='/Friends'>
            <Route path=":FriendName" element={<FriendPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
