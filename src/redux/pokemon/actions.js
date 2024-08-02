import * as CONST from "./constants";

export const getAllPokemons = () => {
  return {
    type: CONST.GET_ALL_POKEMONS,
  };
};
export const getAllPokemonsSuccess = (payload) => {
  return {
    type: CONST.GET_ALL_POKEMONS_SUCCESS,
    payload,
  };
};
export const getAllPokemonsFailed = (payload) => {
  return {
    type: CONST.GET_ALL_POKEMONS_FAILED,
    payload,
  };
};
export const getAllPokemonsReset = () => {
  return {
    type: CONST.GET_ALL_POKEMONS_RESET,
  };
};
export const setCount = () => {
  return {
    type: CONST.SET_COUNT,
  };
};
export const resetCount = () => {
  return {
    type: CONST.RESET_COUNT,
  };
};

export const extendPokemons = (payload) => {
  return {
    type: CONST.EXTEND_POKEMONS,
    payload,
  };
};
export const extendPokemonsSuccess = (payload) => {
  return {
    type: CONST.EXTEND_POKEMONS_SUCCESS,
    payload,
  };
};
export const extendPokemonsFailed = (payload) => {
  return {
    type: CONST.EXTEND_POKEMONS_FAILED,
    payload,
  };
};
export const extendPokemonsReset = () => {
  return {
    type: CONST.EXTEND_POKEMONS_RESET,
  };
};
export const setExtendCount = (payload) => {
  return {
    type: CONST.SET_EXTEND_COUNT,
    payload,
  };
};
export const resetExtendCount = () => {
  return {
    type: CONST.RESET_EXTEND_COUNT,
  };
};
