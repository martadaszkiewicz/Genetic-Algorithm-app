import React, { useState } from 'react';
import './Header.css'

const Header = ({ showDescription, showInput, showSpecification }) => {
  const [descriptionActive, setDescriptionActive] = useState(false);
  const [algorithmActive, setAlgorithmActive] = useState(false);
  const [specificationActive, setSpecificationActive] = useState(false);

  const handleDescriptionClick = () => {
    showDescription();
    setDescriptionActive(true);
    setAlgorithmActive(false);
    setSpecificationActive(false);
  };

  const handleAlgorithmClick = () => {
    showInput();
    setDescriptionActive(false);
    setAlgorithmActive(true);
    setSpecificationActive(false);
  };

  const handleSpecificationClick = () => {
    showSpecification();
    setDescriptionActive(false);
    setAlgorithmActive(false);
    setSpecificationActive(true);
  };


  return (
    <div className="header">
      <h1>Genetic Algorithm</h1>
      <p>Genetic algorithm for Traveling Salesman Problem</p>

      <button
        className={`description-button ${descriptionActive ? 'active-button' : ''}`}
        onClick={handleDescriptionClick}
      >
        Description
      </button>

      <button
        className={`use-algorithm-button ${algorithmActive ? 'active-button' : ''}`}
        onClick={handleAlgorithmClick}
      >
        Use Algorithm
      </button>

      <button
      className={`specification-algorithm-button ${specificationActive ? 'active-button' : ''}`}
      onClick={handleSpecificationClick}
      >
        Algorithm Specifications
      </button>

    </div>
  );
};

export default Header;
