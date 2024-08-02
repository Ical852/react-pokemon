import * as CONST from "./constants";

export const getAllMyPokemons = () => {
  return {
    type: CONST.GET_ALL_MY_POKEMONS,
  };
};
export const getAllMyPokemonsSuccess = (payload) => {
  return {
    type: CONST.GET_ALL_MY_POKEMONS_SUCCESS,
    payload,
  };
};
export const getAllMyPokemonsFailed = (payload) => {
  return {
    type: CONST.GET_ALL_MY_POKEMONS_FAILED,
    payload,
  };
};
export const getAllMyPokemonsReset = () => {
  return {
    type: CONST.GET_ALL_MY_POKEMONS_RESET,
  };
};

export const findPokemon = () => {
  return {
    type: CONST.FIND_POKEMON,
  };
};
export const findPokemonSuccess = (payload) => {
  return {
    type: CONST.FIND_POKEMON_SUCCESS,
    payload,
  };
};
export const findPokemonFailed = (payload) => {
  return {
    type: CONST.FIND_POKEMON_FAILED,
    payload,
  };
};
export const findPokemonReset = () => {
  return {
    type: CONST.FIND_POKEMON_RESET,
  };
};

export const catchPokemon = () => {
  return {
    type: CONST.CATCH_POKEMON,
  };
};
export const catchPokemonSuccess = (payload) => {
  return {
    type: CONST.CATCH_POKEMON_SUCCESS,
    payload,
  };
};
export const catchPokemonFailed = (payload) => {
  return {
    type: CONST.CATCH_POKEMON_FAILED,
    payload,
  };
};
export const catchPokemonReset = () => {
  return {
    type: CONST.CATCH_POKEMON_RESET,
  };
};

export const releasePokemon = () => {
  return {
    type: CONST.RELEASE_POKEMON,
  };
};
export const releasePokemonSuccess = (payload) => {
  return {
    type: CONST.RELEASE_POKEMON_SUCCESS,
    payload,
  };
};
export const releasePokemonFailed = (payload) => {
  return {
    type: CONST.RELEASE_POKEMON_FAILED,
    payload,
  };
};
export const releasePokemonReset = () => {
  return {
    type: CONST.RELEASE_POKEMON_RESET,
  };
};

export const renamePokemon = () => {
  return {
    type: CONST.RENAME_POKEMON,
  };
};
export const renamePokemonSuccess = (payload) => {
  return {
    type: CONST.RENAME_POKEMON_SUCCESS,
    payload,
  };
};
export const renamePokemonFailed = (payload) => {
  return {
    type: CONST.RENAME_POKEMON_FAILED,
    payload,
  };
};
export const renamePokemonReset = () => {
  return {
    type: CONST.RENAME_POKEMON_RESET,
  };
};