import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import useFirebase from './hooks/useFirebase';
import Confidential from './components/Confidential/Confidential';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/confidential" element={
          <RequireAuth>
            <Confidential></Confidential>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
