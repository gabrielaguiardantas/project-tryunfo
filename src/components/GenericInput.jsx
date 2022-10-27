import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenericInput extends Component {
  render() {
    const { handleChange, name, labelTitle, type, dataTestId } = this.props;
    return (
      <label htmlFor={ name }>
        { labelTitle }
        <input
          data-testid={ dataTestId }
          type={ type }
          name={ name }
          id={ name }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

GenericInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default GenericInput;
