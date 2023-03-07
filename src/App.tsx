
import "./App.css";
import React from 'react';
import Hero from "./components/Hero/Hero";
import Popular from "./components/Popular/Popular";
import Why from "./components/Why/Why";
import Clock from "./components/Clock/Clock";

function App() {
  return (
    <div>
      <Hero />
      <Popular />
      <Clock />
      <Why />
      <div className="h-screen"> </div>
    </div>
  );
}


export default App;
