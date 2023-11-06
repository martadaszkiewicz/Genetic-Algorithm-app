import React from 'react';
import './ResultsDisplay.css';
import TrialPlot from './TrialPlot';


const ResultsDisplay = (props) => {
const { cost, sequence, time_to_process, x_results, y_results } = props;

  return (
    <div className="result-container">
      {cost !== null && (
        <div className="result-cost">
          Cost: {cost}
        </div>
      )}

      {sequence !== null && (
        <div className="result-sequence">
          Sequence: {sequence.join(', ')}
        </div>
      )}

      {x_results !== null && (
        <div className='result-x'>
          X coordinates: {x_results.join(', ')}
          </div>
      )}

      {y_results !== null && (
        <div className='result-y'>
          Y coordinates: {y_results.join(', ')}
          </div>
      )}
      
      {time_to_process !== null && (
        <div className="result-time">
          Time to Process: {time_to_process} seconds
        </div>
      )}

      {x_results !== null && y_results !== null && (
        <div className="result-plot">
          <TrialPlot xResults={x_results} yResults={y_results} />
        </div>
      )}
    </div>
  );
}

export default ResultsDisplay;
