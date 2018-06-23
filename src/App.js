import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './components/Card/Card.js';
import Header from './components/Header/Header.js';
import Wrapper from './components/Wrapper/Wrapper.js';
import Container from './components/Grid/Container.js';
import Row from './components/Grid/Row.js';
import Col from './components/Grid/Col.js';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import original_cards from './cards.json';
import './App.css';

// Randomize cards
function copyAndShuffleCards(cards) {
  cards = JSON.parse(JSON.stringify(cards));
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let x = cards[i];
    cards[i] = cards[j];
    cards[j] = x;
  }
  return cards;
}

class App extends Component {
  state = {
    cards: copyAndShuffleCards(original_cards),
    currentScore: 0,
    highScore: 0
  };

  // Handle end of game state; show alert and reset score
  handleEndGame = (won) => {
    if (this.state.currentScore > this.state.highScore) {
      this.setState({ highScore: this.state.currentScore }, () => {
        console.log(this.state.highScore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    if (won) {
      alert("You won! Click to play again.");
    } else {
      alert("You lost! Try again!");
    }
    this.setState({ currentScore: 0 });
  };

  // Handle click behavior; on click, if prev unclicked, increment score; otherwise end game
  handleClicks = id => {
    this.state.cards.find((acc, idx) => {
      let found = false;
      if (acc.id === id) {
        found = true;
        if (this.state.cards[idx].count === 0) {
          let cards = JSON.parse(JSON.stringify(this.state.cards));
          cards[idx].count++;
          cards = copyAndShuffleCards(cards);
          this.setState({ cards: cards, currentScore: this.state.currentScore + 1 }, () => {
            if (this.state.currentScore === this.state.cards.length) {
              this.handleEndGame(true);
            }
          });
        } else {
          this.handleEndGame(false);
        }
      }
      return found;
    });
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.currentScore} highScore={this.state.highScore}>Parks &amp; Recreation: The Clicky Game!</Navbar>
        <Header />
        <Container>
          <Row>
            <div className="cards-wrapper d-flex justify-content-center">
              {this.state.cards.map(card => (
                <Card
                  handleClicks={this.handleClicks}
                  id={card.id}
                  key={card.id}
                  image={card.photo}
                />
              ))}
            </div>
          </Row>
        </Container>
        <Footer />
      </Wrapper>
      
    );
  }
}

export default App;
