/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
// components's import
import axios from 'axios';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Cards from '../components/Cards';

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/image/random/1')
      .then((result) => {
        const data = result.data.message;
        console.log(data);
        setIsLoaded(true);
        setItems(data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <Navbar />
      <Cards data={items} />
    </>
  );
};

export default Home;
