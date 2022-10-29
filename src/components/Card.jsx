import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <fieldset>
        <h2 data-testid="name-card">{cardName}</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <h1 data-testid="attr1-card">{ cardAttr1}</h1>
        <h1 data-testid="attr2-card">{ cardAttr2}</h1>
        <h1 data-testid="attr3-card">{ cardAttr3}</h1>
        <p data-testid="rare-card">{ cardRare}</p>
        {
          cardTrunfo === true && <p data-testid="trunfo-card">Super Trunfo</p>
        }
      </fieldset>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
