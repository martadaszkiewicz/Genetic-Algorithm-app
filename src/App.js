import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Description from './components/Description';
import InputParameters from './components/InputParameters';
import ResultsDisplay from './components/ResultsDisplay';
import AlgorithmSpecification from './components/AlgorithmSpecification';
import './index.css'; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      y: '',
      P: '',
      n: '',
      p_m: '',
      result: null,
      showDescription: false,
      showInput: false,
      showSpecification: false,
      loading: false,
      cost: null, 
      sequence: null,
      time_to_process: null, 
      x_results: null,
      y_results: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  showDescription = () => {
    this.setState({ showDescription: true, showInput: false, showSpecification: false });
  }

  showInput = () => {
    this.setState({ showDescription: false, showInput: true, showSpecification: false });
  }

  showSpecification = () => {
    this.setState({ showDescription: false, showInput: false, showSpecification: true})
  }

  runGeneticAlgorithm = () => {
    this.setState({ loading: true }); // Set loading to true
  
    const x = this.state.x.split(',').map(Number);
    const y = this.state.y.split(',').map(Number);
    const { P, n, p_m } = this.state;
  
    axios.post('http://localhost:5000/api/run_genetic_algorithm', {
      x,
      y,
      P: parseInt(P),
      n: parseFloat(n),
      p_m: parseFloat(p_m),
    })
      .then(response => {
        const { cost, sequence, time_to_process, x_results, y_results } = response.data;
  
        this.setState({ cost, sequence, time_to_process, x_results, y_results, loading: false }); // Set loading to false
      })
      .catch(error => {
        console.error(error);
        this.setState({ loading: false }); // Set loading to false in case of an error
      });
  }
  
  render() {
    const { result, cost, sequence, time_to_process, x_results, y_results } = this.state;

    return (
      <div className="App">
        <Header showDescription={this.showDescription} showInput={this.showInput} showSpecification={this.showSpecification} />
        {this.state.showDescription && <Description />}
        {this.state.showInput && (
          <InputParameters
          state={this.state}
          handleInputChange={this.handleInputChange}
          runGeneticAlgorithm={this.runGeneticAlgorithm}
        />
        )}
        {this.state.showSpecification && <AlgorithmSpecification/>}

        {result || cost || sequence || time_to_process || x_results || y_results ? (
        <ResultsDisplay
          result={result}
          cost={cost}
          sequence={sequence}
          time_to_process={time_to_process}
          x_results={x_results}
          y_results={y_results}
        />
      ) : null}

      </div>
    );
  }
}

export default App;