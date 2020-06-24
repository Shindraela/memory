import React from 'react';
import PropTypes from 'prop-types';
import { saveHOFEntry } from './HallOfFame';
import './HighScoreInput.css';

class HighScoreInput extends React.Component {
  state = {
    winner: ""
  }

  // Arrow fx for binding
  handleWinnerUpdate = (event) => {
    this.setState({
      winner: event.target.value.toUpperCase()
    });
  }

  persistWinner = (event) => {
    event.preventDefault();
    const newEntry = { guesses: this.props.guesses, player: this.state.winner };
    saveHOFEntry(newEntry, this.props.onStored);
  }

  render() {
    return (
      <form className="highScoreInput" onSubmit={this.persistWinner}>
        <p>
          <label>
            Bravo ! Entre ton prénom :
            <input autoComplete="given-name" type="text" value={this.state.winner} onChange={this.handleWinnerUpdate} />
          </label>
          <button type="submit">J’ai gagné !</button>
        </p>
      </form>
    );
  }
}

HighScoreInput.propTypes = {
  guesses: PropTypes.number.isRequired,
  onStored: PropTypes.func.isRequired
}

export default HighScoreInput;
