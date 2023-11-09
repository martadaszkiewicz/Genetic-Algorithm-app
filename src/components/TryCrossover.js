import React from 'react';
import './TryCrossover.css';

const TryCrossover = ({ sequences }) => {
    
    return (
        <div className='try-it-container'>
            {sequences.map((sequence, index) => (
                <div key={index} className='sequence-frame'>
                    {sequence.map((number, i) => (
                        <span key={i} className='sequence-number'>{number}</span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TryCrossover;
