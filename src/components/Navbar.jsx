/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = (props) => {
  const [data, setData] = useState({});
  const { handleChange } = props;

  // para el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = (e) => {
    setData({
      num: e,
    });
  };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">
          Imagenes de Perritos Random espera 10 segundos por favor
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
