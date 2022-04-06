import React from "react";
import Header from "./components/Header";
import './generalStyle.css'


function App() {
  return (
    <div className="App">
      <Header links = {['00 HOME', '01 DESTINATION', '02 CREW', '03 TECHNOLOGY']} />
    </div>
  );
}

export default App;
