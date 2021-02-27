import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import './App.module.css'

function App() {
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  );
}

export default App;
