import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import Searchstudent from './components/Searchstudent';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AddStudent/>} />
    <Route path='/search' element={<Searchstudent/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
