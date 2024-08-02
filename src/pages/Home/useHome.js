import { useEffect } from "react";

export const useHome = (props) => {
  const { getAllPokemonsLoading, getAllPokemons, pokemon, count } = props;

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);

  useEffect(() => {
    // console.log(pokemon);
  }, [pokemon]);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return {
    loading: getAllPokemonsLoading,
    pokemon,
    count,
  };
};
