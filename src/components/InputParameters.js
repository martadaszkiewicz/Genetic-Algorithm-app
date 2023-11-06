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

  return (
    <div className="input-parameters">
      <h2 className="input-text-header">Input your parameters values</h2>

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
