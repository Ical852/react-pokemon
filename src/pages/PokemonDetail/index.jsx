import React from "react";
import { Carousel } from "react-responsive-carousel"; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Badge } from '../../components';
import { getPokeColors } from '../../utils';
import { BaseStatSecion, DetailSection, EvolutionSecion } from './sections';
import { useDetail } from "./useDetail";

const PokemonDetailPage = (props) => {
  const dtl = useDetail(props)

  return (
    <div
      className="p-5 flex flex-col"
      style={{ backgroundColor: getPokeColors(dtl.pokemon?.detail?.types?.[0]?.type?.name) }}>
      <span className="text-xl text-white capitalize font-bold">{dtl.pokemon.name}</span>
      <div className="mt-3">
        {dtl.pokemon?.detail?.types?.map((typ) => {
          return (
            <span className="mr-1">
              <Badge type={typ} />
            </span>
          )
        })}
      </div>
      <Carousel showThumbs={false} infiniteLoop>
        {dtl.gifs.map((gif) => {
          return (
            <img src={gif} className="h-40 object-contain mt-5" />
          )
        })}
      </Carousel>
      <div className="w-full flex flex-row flex-wrap gap-4 mt-5">
        <DetailSection pokemon={dtl.pokemon} />
        <BaseStatSecion pokemon={dtl.pokemon}/>
      </div>
      <EvolutionSecion pokemon={dtl.pokemon} />
    </div>
  );
};

export default PokemonDetailPage;
