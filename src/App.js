import React from "react";
import Header from "./components/Header";
import './generalStyle.css'
import HomeElements from "./components/HomeElements";
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from "./routes";

function App() {
  return (<Routes />
  );
}

export default App;
