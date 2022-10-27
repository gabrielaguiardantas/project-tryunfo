import React, { Component } from 'react';
import GenericInput from './GenericInput';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputName: '',
      inputDescription: '',
      inputAttr01: 0,
      inputAttr02: 0,
      inputAttr03: 0,
      inputImage: '',
      inputRare: 'normal',
      inputTrunfo: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { inputName, inputDescription,
      inputAttr01, inputAttr02, inputAttr03,
      inputImage, inputRare, inputTrunfo } = this.state;
    return (
      <fieldset>
        <GenericInput
          name="inputName"
          value={ inputName }
          handleChange={ this.handleChange }
          labelTitle="Nome"
          type="text"
          dataTestId="name-input"
        />
        <GenericInput
          name="inputDescription"
          value={ inputDescription }
          handleChange={ this.handleChange }
          labelTitle="Descrição"
          type="textarea"
          dataTestId="description-input"
        />
        <GenericInput
          name="inputAttr01"
          value={ inputAttr01 }
          handleChange={ this.handleChange }
          labelTitle="Attr01"
          type="number"
          dataTestId="attr1-input"
        />
        <GenericInput
          name="inputAttr02"
          value={ inputAttr02 }
          handleChange={ this.handleChange }
          labelTitle="Attr02"
          type="number"
          dataTestId="attr2-input"
        />
        <GenericInput
          name="inputAttr03"
          value={ inputAttr03 }
          handleChange={ this.handleChange }
          labelTitle="Attr03"
          type="number"
          dataTestId="attr3-input"
        />
        <GenericInput
          name="inputImage"
          value={ inputImage }
          handleChange={ this.handleChange }
          labelTitle="Imagem"
          type="text"
          dataTestId="image-input"
        />
        <label htmlFor="inputRare">
          Raridade
          <select
            name="inputRare"
            value={ inputRare }
            onChange={ this.handleChange }
            data-testid="rare-input"
            id="inputRare"
          >
            <option defaultValue="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <GenericInput
          name="inputTrunfo"
          value={ inputTrunfo }
          handleChange={ this.handleChange }
          labelTitle="Super Trybe Trunfo"
          type="checkbox"
          dataTestId="trunfo-input"
        />
        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </fieldset>
    );
  }
}

export default Form;
