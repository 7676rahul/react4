import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
