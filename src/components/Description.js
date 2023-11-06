import React, { useState } from 'react';
import './Description-InputParameters.css';

const Description = () => {
  const [selectedParameter, setSelectedParameter] = useState(null);

  const parameterDescriptions = {
    "X, Y coordinates": "Coordinates of the visiting cities. In the presented algorithm the X and Y coordinates are given in a form of two lists. For instance: X = [1.3, 4.0, 2.1, -0.1, ...]",
    "P": "P - population's size, is the size of population which can be adjusted according to the needs.",
    "n": "n - Offsprings' size population factor is the factor defining the size of offsprings' population, according to the initial value of P.",
    "p_m": "p_m - Mutation operator is a factor defining the part of obtained sequences which will be subjected to the mutation in each algorithm.",
  };

  const handleClick = (parameter) => {
    setSelectedParameter(parameterDescriptions[parameter]);
  };

  return (
    <div className="description">
      <p className="description-text">
        Traveling Salesman Problem (TSP) is a classic problem in the fields of optimization and computer science. It involves finding the shortest possible route that visits a set of cities and returns to the starting city.
      </p>
      <p className="description-text">
        Click 'Use Algorithm' to input the necessary parameters and run the genetic algorithm to solve TSP.
      </p>
      <p className="parameters-description">Parameters:</p>
      <div className="parameter-buttons">
        {Object.keys(parameterDescriptions).map((parameter, index) => (
          <button
            key={index}
            className={`parameter-button ${selectedParameter === parameterDescriptions[parameter] ? 'active' : ''}`}
            onClick={() => handleClick(parameter)}
          >
            {parameter}
          </button>
        ))}
      </div>
      <div className="parameter-description">
        {selectedParameter && <p>{selectedParameter}</p>}
      </div>
    </div>
  );
};

export default Description;
