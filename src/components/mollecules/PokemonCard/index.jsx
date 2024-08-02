import React from "react";
import { getPokeColors, getPokeImg } from "../../../utils";
import { Badge } from '../../atoms';
import "./styles.css";

const PokemonCard = (props) => {
  const { pokemon, onClick } = props;
  return (
    <div
      onClick={onClick}
      class="p-3 rounded-md cursor-pointer"
      style={{
        backgroundColor: getPokeColors(pokemon?.detail?.types?.[0]?.type?.name),
      }}
    >
      <div>
        <span className="text-base text-white capitalize">{pokemon.name}</span>
        <div className="flex items-start mt-1">
          <div className="flex flex-col items-start">
            {pokemon?.detail?.types?.map((typ) => {
              return <Badge type={typ} />
            })}
          </div>
          <h5>
          </h5>
          <img src={getPokeImg(pokemon?.detail)} className="max-h-24 w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
