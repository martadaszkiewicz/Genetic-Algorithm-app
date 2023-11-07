import React from 'react';
import './Description-InputParameters.css';
import Loader from './Loader';
import Modal from 'react-modal';
import './InvalidInput.css';

const InputParameters = ({ state, handleInputChange, runGeneticAlgorithm }) => {
  const isInputValid = () => {
    return (
      state.x.trim() !== '' &&
      state.y.trim() !== '' &&
      state.n.trim() !== '' &&
      state.n.trim() < 1.0 &&
      state.n.trim() > 0.0 &&
      state.P.trim() !== '' &&      
      state.P.trim() > 0.0 &&
      state.p_m.trim() !== '' &&
      state.p_m.trim() < 1.0 &&
      state.p_m.trim() > 0.0 &&
      state.x.split(',').length === state.y.split(',').length
    );
  };

  const [modalIsOpen, setModalIsOpen] = React.useState(false); 


  const openModal = () => {
    setModalIsOpen(true);
  };

 
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const fillWithExemplaryValues = () => {
    handleInputChange({ target: { name: "x", value: "3, 2, 12, 7,  9,  3, 16, 11, 9, 2" } });
    handleInputChange({ target: { name: "y", value: "1, 4, 2, 4.5, 9, 1.5, 11, 8, 10, 7" } });
    handleInputChange({ target: { name: "P", value: "250" } });
    handleInputChange({ target: { name: "n", value: "0.8" } });
    handleInputChange({ target: { name: "p_m", value: "0.2" } });
  };


  return (
    <div className="input-parameters">
      <h2 className="input-text-header">Input your parameters values</h2>

      <button 
      className='exemplary-fill-button' 
      onClick={fillWithExemplaryValues}>
        fill with the example
      </button>

      <div className="parameter">
        <div className="label">x coordinates (comma-separated):</div>
        <input
          className="input-field"
          type="text"
          name="x"
          value={state.x}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>

      <div className="parameter">
        <div className="label">y coordinates (comma-separated):</div>
        <input
          className="input-field"
          type="text"
          name="y"
          value={state.y}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>

      <div className="parameter">
        <div className="label">P:</div>
        <input
          className="input-field"
          type="text"
          name="P"
          value={state.P}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>

      <div className="parameter">
        <div className="label">n:</div>
        <input
          className="input-field"
          type="text"
          name="n"
          value={state.n}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>

      <div className="parameter">
        <div className="label">p_m:</div>
        <input
          className="input-field"
          type="text"
          name="p_m"
          value={state.p_m}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>


      <div className="run-button-element">
        <button
          className={`run-button ${state.loading ? 'loading' : ''}`}
          onClick={isInputValid() ? runGeneticAlgorithm : openModal}
          disabled={state.loading}
        >
          {state.loading ? 'Processing...' : 'Run Genetic Algorithm'}
        </button>
        {state.loading && <Loader />}
      </div>

      <div className='processing-info'>
        {state.loading ? 'Remember... Computation time may differ in a due to a chosen path length or parameter values. If you have chosen trial of 10 cities with great population size, it may take a while to calculate the results.':''}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Invalid Input Modal"
        className="Modal" 
      >
        <h2>Invalid Input</h2>
        <p>Remember! X and Y' lengths must be the same and each field cannot be empty. Also keep in mind that n and p_m are factors (it's value has to be from range 0.0 to 1.0).</p>
        <button onClick={closeModal}>Close</button>
      </Modal>

    </div>
  );
};

export default InputParameters;
