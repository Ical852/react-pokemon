import React from "react";
import { getPokeColors } from "../../../utils";
import "./styles.css";

const PokemonCard = (props) => {
  const { pokemon } = props;

  return (
    <div
      class="p-4 rounded-md"
      style={{
        backgroundColor: getPokeColors(pokemon?.detail?.types?.[0]?.type?.name),
      }}
    >
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default PokemonCard;
