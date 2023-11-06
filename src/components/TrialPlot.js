import React from 'react';
import Plot from 'react-plotly.js';

const TrialPlot = ({ xResults, yResults }) => {
    
// xResults and yResults are arrays of coordinates
// the plot include the returne to the starting point, so the arrays have to be extended:
  xResults.push(xResults[0]);
  yResults.push(yResults[0]);
  const trace = {
    x: xResults,
    y: yResults,
    mode: 'lines+markers',
    type: 'scatter',
    marker: { size: 6, color: 'red' },
    line: { shape: 'linear', color:'#ff7700' },
  };

  const layout = {
    title: 'Visualisation of the obtained trial',
    gridcolor: '#808080',
    xaxis: { title: 'X' },
    yaxis: { title: 'Y' },
  };

  return (
    <div className="trial-plot">
      <Plot data={[trace]} layout={layout} />
    </div>
  );
};

export default TrialPlot;
