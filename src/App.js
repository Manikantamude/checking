import Login from './components/Login'
import Navigation from './components/Navigation';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
