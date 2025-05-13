import React from "react"; 
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignIn from './Pages/SignIn'
import { Route, Routes, BrowserRouter as Router} from "react-router";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
      </Routes>
    </Router>
    
  );
}
