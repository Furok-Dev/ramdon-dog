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
  const [data, setData] = useState(10);
  const API_SERCH = `https://dog.ceo/api/breeds/image/random/${data}`;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axios
        .get(API_SERCH)
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
    }, 10000);
  }, []);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <Navbar onChange={handleChange} formValues={data.from} />
      {!isLoaded ? (
        <div className="container-fluid">
          <div className="row">
            <div>Loading...</div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <Cards data={items} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
