import React, { useState } from 'react';
import './AlgorithmSpecification.css';
import TryCrossover from './TryCrossover';

const AlgorithmSpecification = () => {
    const [selectedComputation, setSelectedComputation] = useState(null);
    const [showTryItButton, setShowTryItButton] = useState(false);
    const ComputationDescription = {
        "Cost value":"The function is a vital component of the genetic algorithm for the Traveling Salesman Problem (TSP), responsible for determining the cost or total distance associated with each sequence of cities in the given population. Its primary objective is to assess the efficiency of a particular sequence in visiting all cities and returning to the starting point. Upon receiving the initial population, the function iterates through each sequence and calculates the total distance. This computation includes the Euclidean distances between consecutive cities, with special consideration for the distance between the first and last city to form a closed loop representative of the TSP.",
        "Selection Operator":"The Selection Operator is a key element in the genetic algorithm for the Traveling Salesman Problem (TSP), responsible for choosing a subset of sequences from the population based on their cumulative probability of total costs. This function takes in a matrix representing a population of sequences with associated costs. It calculates the inverse of these costs to obtain a fitness measure and subsequently computes the probabilities of each sequence being selected as a parent. The sequences are then sorted based on these probabilities. The selection process involves iteratively picking sequences until a specified proportion (determined by the coefficient n) of the population is chosen. A random threshold is generated to guide the selection, ensuring diversity. The cumulative probabilities of the sorted sequences are compared with this threshold, and sequences are selected accordingly.",
        "Crossover Operator":"The crossover process involves randomly selecting two parent sequences and combining their information to produce a new offspring sequence. The function iteratively performs this crossover process until the desired number of offspring sequences, determined by the coefficients n and P, is obtained. For each iteration, two parent sequences are randomly chosen from the input matrix of selected parents. The crossover operation involves merging information from the parents to create a new offspring sequence. The crossover process ensures diversity in the offspring by combining different parts of the parent sequences. Specifically, the crossover point is determined by the value of the first element in the second parent sequence. The resulting offspring sequence is constructed by inheriting information from the first parent up to the crossover point and then completing the sequence using information from the second parent.",
        "Mutation Operator":"This function introduces mutations in the offspring population to maintain genetic diversity. A specified percentage (p_m) of the offspring sequences undergo random mutations. For each mutation, two positions are randomly selected, and their values are swapped. The resulting population with mutations is then returned."
    }

    const handleClick = (computation) => {
        setSelectedComputation(ComputationDescription[computation]);
        setShowTryItButton(computation === "Crossover Operator"); // display the button for try crossover
    }

    const handleTryItClick = () => {
        // generating two sequences of numbers from 0 to 7 in random order
        const sequence1 = Array.from({ length: 8 }, (_, i) => i);
        const sequence2 = Array.from({ length: 8 }, (_, i) => i);
    
        // Fisher-Yates shuffle algorithm
        const shuffle = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };
    
        shuffle(sequence1);
        shuffle(sequence2);
    
        setSelectedComputation(<TryCrossover sequences={[sequence1, sequence2]} />);

        setShowTryItButton(false);
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
                {selectedComputation && (
                    <>
                    
                        <p>{selectedComputation}</p>
                        {showTryItButton && (
                            <div className='try-containter'>
                                <button className="try-it-button" onClick={handleTryItClick}>
                                    Try It!
                                </button>
                            </div>
                        )}
                    
                    </>
                )}
            </div>
        </div>
    );
};

export default AlgorithmSpecification;