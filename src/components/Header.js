import React, { useState } from 'react';
import './Header.css'

const Header = ({ showDescription, showInput }) => {
  const [descriptionActive, setDescriptionActive] = useState(false);
  const [algorithmActive, setAlgorithmActive] = useState(false);

  const handleDescriptionClick = () => {
    showDescription();
    setDescriptionActive(true);
    setAlgorithmActive(false);
  };

  const handleAlgorithmClick = () => {
    showInput();
    setDescriptionActive(false);
    setAlgorithmActive(true);
  };

  return (
    <div className="header">
      <h1>Hello</h1>
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
    </div>
  );
};

export default Header;
