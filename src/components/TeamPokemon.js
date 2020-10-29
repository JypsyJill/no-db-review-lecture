import React, { Component } from "react";

class TeamPokemon extends Component {
  constructor() {
    super();

    this.state = {
      nicknameInput: "",
    };
  }

  render() {
    const {pokemon} = this.props
    return (
      <li>
        <h1>{pokemon.name.english}</h1>
        <h2>{pokemon.nickname}</h2>
        <h2>{pokemon.type[0]}</h2>
        {pokemon.type[1] ? (
          <h2>{pokemon.type[1]}</h2>
        ) : null}
      </li>
    );
  }
}

export default TeamPokemon;
