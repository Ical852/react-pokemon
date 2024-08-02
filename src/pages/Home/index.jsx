import React, { useMemo } from "react";
import { connect } from "react-redux";
import Loading from "react-loading";
import {
  getAllPokemons,
  getAllPokemonsReset,
  setCount,
  resetCount,
  extendPokemons,
  extendPokemonsReset,
  setExtendCount,
  resetExtendCount,
} from "../../redux/pokemon/actions";
import { PokemonCard } from "../../components";
import { useHome } from "./useHome";

const HomePage = (props) => {
  const home = useHome(props);

  const _renderContent = useMemo(() => {
    if (home.loading)
      return (
        <div>
          <Loading type="spin" color="purple" />
          <h5>{home.count} / 20</h5>
        </div>
      );

    return home.pokemon.results?.map((poke) => {
      return <PokemonCard pokemon={poke} />;
    });
  }, [home.loading, home.count, home.pokemon]);

  return (
    <div className="m-5">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {_renderContent}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getAllPokemonsLoading: state.pokemon.getAllPokemonsLoading,
  getAllPokemonsFailed: state.pokemon.getAllPokemonsFailed,
  pokemon: state.pokemon.pokemon,
  count: state.pokemon.count,

  extendPokemonLoading: state.pokemon.extendPokemonLoading,
  extendPokemonFailed: state.pokemon.extendPokemonFailed,
  extendPokemon: state.pokemon.extendPokemon,
  extendCount: state.pokemon.extendCount,
});

const mapDispatchToProps = {
  getAllPokemons: () => getAllPokemons(),
  getAllPokemonsReset: () => getAllPokemonsReset(),
  setCount: () => setCount(),
  resetCount: () => resetCount(),
  extendPokemons: (payload) => extendPokemons(payload),
  extendPokemonsReset: () => extendPokemonsReset(),
  setExtendCount: () => setExtendCount(),
  resetExtendCount: () => resetExtendCount(),
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
