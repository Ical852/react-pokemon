import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useDetail = (props) => {
  const {
    findPokemon,
    findPokemonLoading,
    findPokemonResponse,
    findPokemonError,
    findPokemonReset,
    
    catchPokemon,
    catchPokemonLoading,
    catchPokemonResponse,
    catchPokemonError,
    catchPokemonReset,

    releasePokemon,
    releasePokemonLoading,
    releasePokemonResponse,
    releasePokemonError,
    releasePokemonReset,

    renamePokemon,
    renamePokemonLoading,
    renamePokemonResponse,
    renamePokemonError,
    renamePokemonReset,
    } = props;
  const navigate = useNavigate();
  const paramState = useLocation().state;
  const [isCaught, setIsCaught] = useState(false);

  const isDisabled = useMemo(() => {
    return isCaught && !paramState.id;
  }, [isCaught]);

  const getGifs = useMemo(() => {
    const gifs = [];
    gifs.push(paramState.detail.sprites.other.showdown.front_default);
    Object.keys(paramState.detail.sprites.other.showdown).map((key) => {
      if (paramState.detail.sprites.other.showdown[key] !== null && key !== 'front_default') {
        gifs.push(paramState.detail.sprites.other.showdown[key])
      }
    })

    return gifs;
  }, [paramState]);

  const onBtnClick = useCallback(() => {
    if (isCaught) {
      const confirmed = window.confirm('Are you sure want to release?');
      if (confirmed) {
        releasePokemon({ id: paramState.id });
      }
    } else {
      const nickname = window.prompt('Put pokemon nickname');
      if (nickname) {
        catchPokemon({ nickname, url: paramState.url })
      }
    }
  }, [isCaught, paramState]);

  const onRename = useCallback(() => {
    const newName = prompt('Input new nicnname');
    if (newName) {
      renamePokemon({ id: paramState.id, nickname: newName });
    }
  }, [paramState]);

  useEffect(() => {
    if (renamePokemonError) {
      alert('Failed to rename pokemon');
      renamePokemonReset();
    }
    if (renamePokemonResponse?.status === 200) {
      alert('Success to rename pokemon');
      renamePokemonReset();
      navigate('/my-pokemons');
    }
  }, [renamePokemonResponse]);

  useEffect(() => {
    if (catchPokemonError) {
      alert('Failed to catch pokemon, try again');
      catchPokemonReset();
    }
    if (catchPokemonResponse?.status === 200) {
      alert('Success to catch pokemon');
      catchPokemonReset();
      navigate('/');
    }
  }, [catchPokemonResponse]);

  useEffect(() => {
    if (releasePokemonError) {
      alert('Release pokemon failed');
      releasePokemonReset();
    }
    if (releasePokemonResponse?.status === 200) {
      alert('Release pokemon success');
      releasePokemonReset();
      navigate('/my-pokemons')
    }
  }, [releasePokemonResponse]);

  useEffect(() => {
    findPokemon({ url: paramState.url });
  }, []);

  useEffect(() => {
    if (findPokemonError) {
      setIsCaught(false);
      findPokemonReset();
    }
    if (findPokemonResponse?.status === 200) {
      setIsCaught(true);
    }
  }, [findPokemonResponse]);

  return {
    loading: findPokemonLoading || catchPokemonLoading || releasePokemonLoading || renamePokemonLoading,
    pokemon: paramState,
    gifs: getGifs,
    isCaught,
    onBtnClick,
    onRename,
    isDisabled,
    isMine: paramState.id
  };
};
