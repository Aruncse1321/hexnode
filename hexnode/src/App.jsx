import React from 'react'
import "./App.css";
import Requirements from "./components/Requirements";
import Carousels from "./components/Carousels";
import Additional from "./components/Additional";
import Header from "./components/Header";
import Signup from './components/Signup';
import Sample from './components/Sample';

const App = () => {


  return (
    <>
 
      <Header />
      <Requirements />
      <Carousels />
      <Additional />
      <Signup/> 
      {/* <Sample/> */}
    </>
  )
}

export default App
