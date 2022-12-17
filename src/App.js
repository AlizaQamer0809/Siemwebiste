import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import Registeration from './components/Registeration';
import fire from './config/fire';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path='/Login' element={< Login />}></Route>
        <Route exact path='/' element={< Registeration />}></Route>

        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
