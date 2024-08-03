import { useCallback, useEffect, useState } from "react";
import { pokemonApis } from "../../redux/pokemon/apis";
import { useNavigate } from "react-router-dom";

export const useHome = () => {
  const navigate = useNavigate();
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

  const onClick = useCallback((pokemon) => {
    return navigate('/detail', { state: pokemon });
  }, [navigate]);

  useEffect(() => {
    getPokemonData(setLoading);
  }, []);

  return {
    loading,
    extending,
    pokemons,
    count,
    onExtend,
    onClick
  };
};
