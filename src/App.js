import logo from './logo.svg';
import './App.css';
import React from "react";
import UI from './UI';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Login} element={<Main/>}/>
          <Route exact path="/login" component={Login} element={<Login/>}/>
          <Route path="/ui" component={UI} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
