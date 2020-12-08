/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

const Cards = ({ data }) => (
  <div className="card" style={{ width: '18rem' }}>
    {data.map((item, index) => (
      <>
        <img
          src={item}
          className="card-img-top"
          alt="Imagen ramdon del perro"
          key={index}
        />
        <div className="card-body">
          <p className="card-text">Perro bonito</p>
        </div>
      </>
    ))}
  </div>
);

export default Cards;
