import React from "react";
import TeamPokemon from "./TeamPokemon";

const Team = (props) => {
  const pokemonArray = props.team.map((pokemon, index) => (
    <TeamPokemon
      key={`${pokemon.id}-${index}`}
      pokemon={pokemon}
      removeFromTeam={props.removeFromTeam}
    />
  ));
  console.log(props.team, pokemonArray);
  return <ul>{pokemonArray}</ul>;
};

export default Team;
