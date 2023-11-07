import React, { useState } from 'react';
import './AlgorithmSpecification.css';

const AlgorithmSpecification = () => {
    const [selectedComputation, setSelectedComputation] = useState(null);
    const ComputationDescription = {
        "Cost value":"Function for calculating the costs between the cities in the given sequences uses euclidean distance. It is important to also calculate the distance between the first and the last city - point (in the total cost of each sequance the return has to be included). ",
        "Selection operator":"with cumulative reverse costs (...)",
        "Crossover Operator":"try it",
        "Mutation Operator":"Implementation of mutation with (p_m*100)% of accuring in the population."
    }

    const handleClick = (computation) => {
        setSelectedComputation(ComputationDescription[computation]);
    }

    return (
        <div className='specification'>
            <p className='specification-text'>
                Some computation may differ in many sources. so you can know more about ours.
            </p>
            <p className='computation-description'>Operators:</p>

            <div className='computation-buttons'>
                {Object.keys(ComputationDescription).map((computation, index) => (
                    <button
                    key={index}
                    className={`computation-button ${selectedComputation === ComputationDescription[computation] ? 'active' : ''}`}
                    onClick={() => handleClick(computation)}
                    >
                        {computation}

                    </button>
                ))}
            </div>
            <div className='computation-description'>
                {selectedComputation && <p>{selectedComputation}</p>}
            </div>
        </div>
    );
};
export default AlgorithmSpecification;