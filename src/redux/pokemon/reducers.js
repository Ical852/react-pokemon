import * as CONST from "./constants";
import * as STATE from "./initialStates";

const pokemonInitialStates = {
  ...STATE.pokemonInitialStates,
  action: "",
};

export const pokemonReducers = (state = pokemonInitialStates, action) => {
  const { payload, type } = action;
  const actions = {
    // GET_ALL_POKEMONS
    [CONST.GET_ALL_POKEMONS]: () => ({
      ...state,
      getAllPokemonsLoading: true,
      getAllPokemonsError: false,
      pokemon: {
        count: 0,
        next: "",
        previous: "",
        results: [],
      },
      action: type,
    }),
    [CONST.GET_ALL_POKEMONS_SUCCESS]: () => ({
      ...state,
      getAllPokemonsLoading: false,
      getAllPokemonsError: false,
      pokemon: payload,
      action: type,
    }),
    [CONST.GET_ALL_POKEMONS_FAILED]: () => ({
      ...state,
      getAllPokemonsLoading: false,
      getAllPokemonsError: true,
      pokemon: {
        count: 0,
        next: "",
        previous: "",
        results: [],
      },
      action: type,
    }),
    [CONST.GET_ALL_POKEMONS_RESET]: () => ({
      ...state,
      getAllPokemonsLoading: false,
      getAllPokemonsError: false,
      pokemon: {
        count: 0,
        next: "",
        previous: "",
        results: [],
      },
      action: type,
    }),
    [CONST.UPDATE_POKEMON]: () => ({
      ...state,
      pokemon: payload,
      action: type,
    }),
    [CONST.SET_COUNT]: () => ({
      ...state,
      count: state.count + 1,
      action: type,
    }),
    [CONST.RESET_COUNT]: () => ({
      ...state,
      count: 0,
      action: type,
    }),
    // GET_ALL_POKEMONS

    // EXTEND_POKEMONS
    [CONST.EXTEND_POKEMONS]: () => ({
      ...state,
      extendPokemonLoading: true,
      extendPokemonError: false,
      extendPokemon: {
        count: 0,
        next: "",
        previous: "",
        results: [],
      },
      action: type,
    }),
    [CONST.EXTEND_POKEMONS_SUCCESS]: () => ({
      ...state,
      extendPokemonLoading: false,
      extendPokemonError: false,
      extendPokemon: payload,
      action: type,
    }),
    [CONST.EXTEND_POKEMONS_FAILED]: () => ({
      ...state,
      extendPokemonLoading: false,
      extendPokemonError: true,
      extendPokemon: {
        count: 0,
        next: "",
        previous: "",
        results: [],
      },
      action: type,
    }),
    [CONST.EXTEND_POKEMONS_RESET]: () => ({
      ...state,
      extendPokemonLoading: false,
      extendPokemonError: false,
      extendPokemon: {
        count: 0,
        next: "",
        previous: "",
        results: [],
      },
      action: type,
    }),
    [CONST.SET_EXTEND_COUNT]: () => ({
      ...state,
      extendCount: state.extendCount + 1,
      action: type,
    }),
    [CONST.RESET_EXTEND_COUNT]: () => ({
      ...state,
      extendCount: 0,
      action: type,
    }),
    // GET_ALL_POKEMONS

    DEFAULT: () => state,
  };

  return (actions[type] || actions.DEFAULT)();
};
