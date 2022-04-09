import React from "react";
import Header from "./components/Header";
import './generalStyle.css'
import HomeElements from "./components/HomeElements";
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from "./routes";
import Mars from "./components/planets_destination/Mars";
import Europa from "./components/planets_destination/Europa";

function App() {
  return (
  <Routes />
  );
}

export default App;
