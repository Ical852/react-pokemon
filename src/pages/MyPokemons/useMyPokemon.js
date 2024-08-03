import { useCallback, useEffect, useState } from "react";
import { pokemonApis } from "../../redux/pokemon/apis";
import { useNavigate } from "react-router-dom";
import { copyData } from "../../utils";

export const useMyPokemon = (props) => {
  const {
    getAllMyPokemons,
    getAllMyPokemonsLoading,
    getAllMyPokemonsResponse,
    getAllMyPokemonsError,
    getAllMyPokemonsReset,
  } = props;

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  const onClick = useCallback((pokemon) => {
    return navigate('/detail', { state: pokemon });
  }, [navigate]);

  const setupPokemon = useCallback(async (data) => {
    const copy = copyData(data, []);
    setMaxCount(copy.length);
    setLoading(true);
    const response = await pokemonApis.getAllMyPokemons({data: copy, setCount});
    setLoading(false);
    setPokemons(response);
    getAllMyPokemonsReset();
  }, [getAllMyPokemonsResponse]);

  useEffect(() => {
    getAllMyPokemons();
  }, []);

  useEffect(() => {
    if (getAllMyPokemonsError) {
      getAllMyPokemonsReset();
    }
    if (getAllMyPokemonsResponse?.status === 200) {
      setupPokemon(getAllMyPokemonsResponse?.data);
    }
  }, [getAllMyPokemonsResponse]);

  return {
    loading: getAllMyPokemonsLoading || loading,
    pokemons,
    count,
    maxCount,
    onClick,
  };
};
