import React from "react";
import DexPokemon from "./DexPokemon";
import axios from "axios";

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      searchInput: "",
      displayPokemon: [],
    };
  }

  componentDidMount() {
    axios.get("/api/pokemon").then((res) => {
      this.setState({
        displayPokemon: res.data,
      });
    });
  }

  render() {
    const mappedPokemon = this.state.displayPokemon.map((pokemon) => (
      <DexPokemon key={pokemon.id} pokemon={pokemon} addToTeam={this.props.addToTeam}/>
    ));
    return <ul className='dex-pokemon'>{mappedPokemon}</ul>;
  }
}

export default Pokedex;
