import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageNotFound from './components/PageNotFound';
import DataPokemon from './components/DataPokemon';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState, createContext } from 'react';
import axios from "axios";



function App() {


  return (
    <>
      <BrowserRouter>
        {/* <UserContext.Provider value={pokemonuniv}> */}


        {/* <h1> Hello React ❤️</h1> */}
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Home />
            </>} />
          <Route path="/data/:name" element={<DataPokemon />} />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
        <Toaster />
        {/* </UserContext.Provider> */}
      </BrowserRouter>

    </>

  );
}

export default App;
