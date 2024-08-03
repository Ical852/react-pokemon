import React, { useMemo } from "react";
import { connect } from "react-redux";
import Loading from "react-loading";

import {
  getAllMyPokemons,
  getAllMyPokemonsReset,
} from '../../redux/rest/actions';
import { PokemonCard } from "../../components";
import { useMyPokemon } from "./useMyPokemon";

const MyPokemonPage = (props) => {
  const myp = useMyPokemon(props);

  const _renderLoading = useMemo(() => {
    if (myp.loading) {
      return (
        <div className="w-full flex justify-center">
          <div className = "flex flex-col items-center" >
            <Loading type="spin" color="purple" />
            <h5 className="my-2 font-semibold">{myp.count} / {myp.maxCount}</h5>
            <h5 className="font-semibold">Loading My Pokemon Data ...</h5>
          </div>
        </div>
      )
    }
    if (myp.pokemons.length < 1) {
      return (
        <div className="w-full flex justify-center">
          <div className = "flex flex-col items-center" >
            <h5 className="font-semibold">You havent caught any pokemon yet</h5>
          </div>
        </div>
      )
    }
  }, [myp.loading, myp.count, myp.maxCount, myp.pokemons]);

  const _renderPokemons = useMemo(() => {
    if (!myp.loading) return myp.pokemons?.map((poke) => {
      return <PokemonCard pokemon={poke} onClick={() => myp.onClick(poke)} />;
    });
  }, [myp.loading, myp.pokemons]);

  return (
    <div className="m-5">
      {_renderLoading}
      <div class="grid grid-cols-2 sm:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {_renderPokemons}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getAllMyPokemonsLoading: state.myPokemon.getAllMyPokemonsLoading,
  getAllMyPokemonsResponse: state.myPokemon.getAllMyPokemonsResponse,
  getAllMyPokemonsError: state.myPokemon.getAllMyPokemonsError,
});

const mapDispatchToProps = (dispatch) => ({
  getAllMyPokemons: (payload) => dispatch(getAllMyPokemons(payload)),
  getAllMyPokemonsReset: (payload) => dispatch(getAllMyPokemonsReset(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemonPage);
