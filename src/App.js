import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import MovieDetails from "./components/MovieDetails";
import { Toaster } from 'react-hot-toast'
const App = () => {

  return (
    <>
      <Toaster 
      position='top-right'
      toastOptions={{
        success: {
          theme: {
            primary: '#4aed88'
          }
        }
      }}
      >       
      </Toaster>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default App;
