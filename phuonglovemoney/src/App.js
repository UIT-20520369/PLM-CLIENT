import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Đây là cái layout nè</p>
      </header>
      <div className='children'>
          <Outlet />
      </div>
    </div>
  );
}

export default App;
