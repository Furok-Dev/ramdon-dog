/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

const Cards = ({ data }) => (
  <>
    {data.map((item, index) => (
      <div className="col">
        <div className="card" style={{ width: '18rem', margin: '1rem' }}>
          <img
            src={item}
            className="card-img-top"
            alt="Imagen ramdon del perro"
            key={index}
          />
          <div className="card-body">
            <p className="card-text">Perro bonito</p>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default Cards;
