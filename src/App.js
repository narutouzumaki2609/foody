import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './screen/Home';
import SignUp from './components/SignUp';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
