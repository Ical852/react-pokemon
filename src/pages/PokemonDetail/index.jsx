import React from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel"; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  findPokemon,
  findPokemonReset,
  catchPokemon,
  catchPokemonReset,
  releasePokemon,
  releasePokemonReset,
  renamePokemon,
  renamePokemonReset,
} from '../../redux/rest/actions';

import { Badge } from '../../components';
import { getPokeColors } from '../../utils';
import { BaseStatSecion, DetailSection, EvolutionSecion } from './sections';
import { useDetail } from "./useDetail";
import Loading from "react-loading";

const PokemonDetailPage = (props) => {
  const dtl = useDetail(props)

  return (
    <div
      className="p-5 flex flex-col"
      style={{ backgroundColor: getPokeColors(dtl.pokemon?.detail?.types?.[0]?.type?.name) }}>
      <span className="text-xl text-white capitalize font-bold">{dtl.pokemon.nickname ?? dtl.pokemon.name}</span>
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
      <div className="flex flex-row justify-center mt-5 gap-4">
        <button
          disabled={dtl.loading || dtl.isDisabled}
          onClick={dtl.onBtnClick}
          className={`bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 px-20 py-1 text-white rounded-md
          ${dtl.loading || dtl.isDisabled ? 'opacity-50' : ''} flex flex-row`}>
          {dtl.loading && (
            <Loading width={24} height={24} type="spin" color="white" className="mr-2" />
          )}
          <span>
            {dtl.isDisabled ? 'Caught' : dtl.isCaught ? 'Release' : 'Catch'} 
          </span>
        </button>
        {dtl.isMine && (
          <button
            disabled={dtl.loading || dtl.isDisabled}
            onClick={dtl.onRename}
            className={`bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 px-20 py-1 text-white rounded-md
            ${dtl.loading || dtl.isDisabled ? 'opacity-50' : ''} flex flex-row`}>
            {dtl.loading && (
              <Loading width={24} height={24} type="spin" color="white" className="mr-2" />
            )}
            <span>Rename</span>
          </button>
        )}
      </div>
      <div className="w-full flex flex-row flex-wrap gap-4 mt-5">
        <DetailSection pokemon={dtl.pokemon} />
        <BaseStatSecion pokemon={dtl.pokemon}/>
      </div>
      <EvolutionSecion pokemon={dtl.pokemon} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  findPokemonLoading: state.myPokemon.findPokemonLoading,
  findPokemonResponse: state.myPokemon.findPokemonResponse,
  findPokemonError: state.myPokemon.findPokemonError,

  catchPokemonLoading: state.myPokemon.catchPokemonLoading,
  catchPokemonResponse: state.myPokemon.catchPokemonResponse,
  catchPokemonError: state.myPokemon.catchPokemonError,

  releasePokemonLoading: state.myPokemon.releasePokemonLoading,
  releasePokemonResponse: state.myPokemon.releasePokemonResponse,
  releasePokemonError: state.myPokemon.releasePokemonError,

  renamePokemonLoading: state.myPokemon.renamePokemonLoading,
  renamePokemonResponse: state.myPokemon.renamePokemonResponse,
  renamePokemonError: state.myPokemon.renamePokemonError,
});

const mapDispatchToProps = (dispatch) => ({
  findPokemon: (payload) => dispatch(findPokemon(payload)),
  findPokemonReset: () => dispatch(findPokemonReset()),
  catchPokemon: (payload) => dispatch(catchPokemon(payload)),
  catchPokemonReset: () => dispatch(catchPokemonReset()),
  releasePokemon: (payload) => dispatch(releasePokemon(payload)),
  releasePokemonReset: () => dispatch(releasePokemonReset()),
  renamePokemon: (payload) => dispatch(renamePokemon(payload)),
  renamePokemonReset: () => dispatch(renamePokemonReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailPage);
