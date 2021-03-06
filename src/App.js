import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Pokedex from './components/Pokedex.js';
import SearchResults from './components/SearchResults.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      active: null,
      index: 0,
      searchInput: '',
      searchResults: [],
    };
  }

  // Get array of all Pokemon names and endpoints
  componentDidMount() {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=1000';

    axios
      .get(endpoint)
      .then((res) => {
        const pokemon = res.data.results;
        let numberOfPokemon = pokemon.length - 1;
        let randomIndex = Math.floor(Math.random() * numberOfPokemon);

        // Set random Pokemon on initial load
        this.setState({
          pokemon,
          active: pokemon[randomIndex],
          index: randomIndex,
        });
      })
      .catch((err) => {
        console.log('There was an error making the request');
      });
  }

  // Refresh searchResults array whenever search input is updated
  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchInput !== prevState.searchInput) {
      let searchResults = this.state.pokemon.filter((p) => {
        return p.name.includes(this.state.searchInput.toLowerCase());
      });
      this.setState({ searchResults });
    }
  }

  onClickNext = () => {
    // Reset index to 0 after the last item in the array
    let onLastPokemon = this.state.index === this.state.pokemon.length - 1;
    let newIndex = onLastPokemon ? 0 : this.state.index + 1;

    this.setState({ index: newIndex, active: this.state.pokemon[newIndex] });
  };

  onClickBack = () => {
    // Set to last item when moving back from first item in array
    let onFirstPokemon = this.state.index === 0;
    let lastPokemon = this.state.pokemon.length - 1;
    let newIndex = onFirstPokemon ? lastPokemon : this.state.index - 1;

    this.setState({ index: newIndex, active: this.state.pokemon[newIndex] });
  };

  onSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  // Update state to reflect newly selected Pokemon
  onClickSearchResult = (e) => {
    let pokemonNames = this.state.pokemon.map((p) => p.name);
    let selectedPokemon = e.target.id;
    let index = pokemonNames.indexOf(selectedPokemon);

    this.setState({
      index,
      active: this.state.pokemon[index],
      searchInput: '',
    });
  };

  // Only render Pokedex once there is an active Pokemon in state.
  // SearchResults component is hidden by default, via CSS.
  render() {
    return (
      <div className='App'>
        <Header
          pokemon={this.state.pokemon}
          input={this.state.searchInput}
          onSearchInput={this.onSearchInput}
        />
        <SearchResults
          results={this.state.searchResults}
          input={this.state.searchInput}
          onClickSearchResult={this.onClickSearchResult}
        />
        {this.state.active && (
          <Pokedex
            active={this.state.active}
            onClickBack={this.onClickBack}
            onClickNext={this.onClickNext}
          />
        )}
      </div>
    );
  }
}

export default App;
