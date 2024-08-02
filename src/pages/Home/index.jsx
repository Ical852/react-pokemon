import React, { useMemo } from "react";
import { connect } from "react-redux";
import Loading from "react-loading";
import { PokemonCard } from "../../components";
import { useHome } from "./useHome";

const HomePage = (props) => {
  const home = useHome(props);

  const _renderLoading = useMemo(() => {
    if (home.loading) {
      return (
        <div className="w-full flex justify-center">
          <div className = "flex flex-col items-center" >
            <Loading type="spin" color="purple" />
            <h5 className="my-2 font-semibold">{home.count} / 20</h5>
            <h5 className="font-semibold">Loading Pokemon Data ...</h5>
          </div>
        </div>
      )
    }
  }, [home.loading, home.count]);

  const _renderPokemons = useMemo(() => {
    if (!home.loading) return home.pokemons.results?.map((poke) => {
      return <PokemonCard pokemon={poke} onClick={() => home.onClick(poke)} />;
    });
  }, [home.loading, home.pokemons]);

  const _renderLoadMore = useMemo(() => {
    if (home.extending) {
      return (
        <div className="w-full flex justify-center mt-5">
          <div className = "flex flex-col items-center" >
            <Loading type="spin" color="purple" />
            <h5 className="my-2 font-semibold">{home.count} / 20</h5>
            <h5 className="font-semibold">Loading More Pokemon Data ...</h5>
          </div>
        </div>
      )
    }

    return (!home.loading && !home.extending) && (
      <div className="flex w-full justify-center items-center mt-5">
        <button 
          onClick={home.onExtend}
          className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 px-20 py-1 text-white rounded-md">
          Load More
        </button>
      </div>
    )
  }, [home.loading, home.extending, home.count, home.onExtend, home.pokemons]);

  return (
    <div className="m-5">
      {_renderLoading}
      <div class="grid grid-cols-2 sm:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {_renderPokemons}
      </div>
      {_renderLoadMore}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
