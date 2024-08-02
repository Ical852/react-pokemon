import { useCallback, useEffect, useState } from "react";
import { pokemonApis } from "../../redux/pokemon/apis";

export const useHome = () => {
  const [loading, setLoading] = useState(false);
  const [extending, setExtending] = useState(false);
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState({});

  const getPokemonData = useCallback(
    async (setLoading, url = null, results = []) =>
  {
    setLoading(true);
    const response =  await pokemonApis.getAllPokemons({
      url,
      setCount,
      results,
    });

    if (url) {
      setPokemons({
        ...response,
        results: [
          ...pokemons.results,
          ...response.results,
        ]
      })
    } else {
      setPokemons(response);
    }

    setCount(0);
    setLoading(false);
  }, [pokemons]);

  const onExtend = useCallback(() => {
    getPokemonData(setExtending, pokemons?.next, pokemons?.results);
  }, [pokemons]);

  useEffect(() => {
    getPokemonData(setLoading);
  }, []);

  return {
    loading,
    extending,
    pokemons,
    count,
    onExtend
  };
};
