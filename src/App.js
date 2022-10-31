import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  state = {
    cardImage: '',
    cardName: '',
    cardRare: 'normal',
    cardTrunfo: false,
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    isSaveButtonDisabled: true,
    savedCards: [],
    hasTrunfo: false,
  };

  validateForm = () => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare,
    } = this.state;

    const maxAttr = 90;
    const minAttr = 0;
    const maxSumAttr = 210;

    const name = cardName.length > 0;
    const description = cardDescription.length > 0;
    const image = cardImage.length > 0;
    const rare = cardRare.length > 0;
    const cardAtr1 = minAttr <= cardAttr1 && cardAttr1 <= maxAttr;
    const cardAtr2 = minAttr <= cardAttr2 && cardAttr2 <= maxAttr;
    const cardAtr3 = minAttr <= cardAttr3 && cardAttr3 <= maxAttr;
    const sumAtr = Number(cardAttr1) + Number(cardAttr2)
    + Number(cardAttr3) <= maxSumAttr;
    const result = name && description
    && image && rare && cardAtr1 && cardAtr2 && cardAtr3 && sumAtr;

    this.setState({
      isSaveButtonDisabled: !result });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.validateForm);
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, savedCards, hasTrunfo,
    } = this.state;
    const savedCard = {
      cardImage,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    savedCards.push(savedCard);
    if (savedCards.some((card) => card.cardTrunfo === true)) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState({
      cardImage: '',
      cardName: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      isSaveButtonDisabled: true,
      savedCards,
    });
  };

  handleCards = (index) => {
    const { savedCards } = this.state;
    savedCards.splice(index, 1);
    if (savedCards.some((card) => card.cardTrunfo === true)) {
      this.setState({
        hasTrunfo: true,
        savedCards,
      });
    } else {
      this.setState({
        hasTrunfo: false,
        savedCards,
      });
    }
  };

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, savedCards,
    } = this.state;
    return (
      <div className="page">
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          className="form"
        />
        <Card
          cardImage={ cardImage }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          savedCards.map((card, index) => (
            <div key={ index }>
              <Card
                cardImage={ card.cardImage }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                onClick={ () => this.handleCards(index) }
                type="button"
                data-testid="delete-button"
              >
                Excluir
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
