import React from 'react';
import PokedexImage from './PokedexImage.js';
import PokedexInfo from './PokedexInfo.js';
import './Pokedex.css';
import axios from 'axios';
import back from '../assets/back.svg';
import next from '../assets/next.svg';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchPokemonData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.active.name !== prevProps.active.name) {
      this.fetchPokemonData();
    }
  }

  fetchPokemonData() {
    axios
      .get(this.props.active.url)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log('There was an error making the request');
      });
  }

  render() {
    return (
      <div className='Pokedex-container'>
        {this.state.data ? (
          <React.Fragment>
            <PokedexImage
              image={this.state.data.sprites.front_default}
              active={this.props.active}
            />
            <div className='Pokedex-nav'>
              <img
                className='Pokedex-nav-icons'
                src={back}
                alt='Back button'
                onClick={this.props.onClickBack}
              ></img>
              <img
                className='Pokedex-nav-icons'
                src={next}
                alt='Next button'
                onClick={this.props.onClickNext}
              ></img>
            </div>
            <PokedexInfo
              name={this.state.data.name}
              weight={this.state.data.weight}
              height={this.state.data.height}
              id={this.state.data.id}
            />
          </React.Fragment>
        ) : (
          <div className='Pokedex-loading-message'>Loading pokemon...</div>
        )}
      </div>
    );
  }
}

export default Pokedex;
