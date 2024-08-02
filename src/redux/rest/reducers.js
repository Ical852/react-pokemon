import * as CONST from "./constants";
import * as STATE from "./initialStates";

const myPokemonsInitialStates = {
  ...STATE.myPokemonsInitialStates,
  action: "",
};

export const myPokemonReducers = (
  state = myPokemonsInitialStates,
  action
) => {
  const { payload, type } = action;
  const actions = {
    // GET_ALL_MY_POKEMONS
    [CONST.GET_ALL_MY_POKEMONS]: () => ({
      ...state,
      getAllMyPokemonsLoading: true,
      getAllMyPokemonsError: false,
      getAllMyPokemonsResponse: {},
      action: type,
    }),
    [CONST.GET_ALL_MY_POKEMONS_SUCCESS]: () => ({
      ...state,
      getAllMyPokemonsLoading: false,
      getAllMyPokemonsError: false,
      getAllMyPokemonsResponse: payload,
      action: type,
    }),
    [CONST.GET_ALL_MY_POKEMONS_FAILED]: () => ({
      ...state,
      getAllMyPokemonsLoading: false,
      getAllMyPokemonsError: true,
      getAllMyPokemonsResponse: payload,
      action: type,
    }),
    [CONST.GET_ALL_MY_POKEMONS_RESET]: () => ({
      ...state,
      getAllMyPokemonsLoading: false,
      getAllMyPokemonsError: false,
      getAllMyPokemonsResponse: {},
      action: type,
    }),
    // GET_ALL_MY_POKEMONS

    // FIND_POKEMON
    [CONST.FIND_POKEMON]: () => ({
      ...state,
      findPokemonLoading: true,
      findPokemonError: false,
      findPokemonResponse: {},
      action: type,
    }),
    [CONST.FIND_POKEMON_SUCCESS]: () => ({
      ...state,
      findPokemonLoading: false,
      findPokemonError: false,
      findPokemonResponse: payload,
      action: type,
    }),
    [CONST.FIND_POKEMON_FAILED]: () => ({
      ...state,
      findPokemonLoading: false,
      findPokemonError: true,
      findPokemonResponse: payload,
      action: type,
    }),
    [CONST.FIND_POKEMON_RESET]: () => ({
      ...state,
      findPokemonLoading: false,
      findPokemonError: false,
      findPokemonResponse: {},
      action: type,
    }),
    // FIND_POKEMON

    // CATCH_POKEMON
    [CONST.CATCH_POKEMON]: () => ({
      ...state,
      catchPokemonLoading: true,
      catchPokemonError: false,
      catchPokemonResponse: {},
      action: type,
    }),
    [CONST.CATCH_POKEMON_SUCCESS]: () => ({
      ...state,
      catchPokemonLoading: false,
      catchPokemonError: false,
      catchPokemonResponse: payload,
      action: type,
    }),
    [CONST.CATCH_POKEMON_FAILED]: () => ({
      ...state,
      catchPokemonLoading: false,
      catchPokemonError: true,
      catchPokemonResponse: payload,
      action: type,
    }),
    [CONST.CATCH_POKEMON_RESET]: () => ({
      ...state,
      catchPokemonLoading: false,
      catchPokemonError: false,
      catchPokemonResponse: {},
      action: type,
    }),
    // CATCH_POKEMON

    // RELEASE_POKEMON
    [CONST.RELEASE_POKEMON]: () => ({
      ...state,
      releasePokemonLoading: true,
      releasePokemonError: false,
      releasePokemonResponse: {},
      action: type,
    }),
    [CONST.RELEASE_POKEMON_SUCCESS]: () => ({
      ...state,
      releasePokemonLoading: false,
      releasePokemonError: false,
      releasePokemonResponse: payload,
      action: type,
    }),
    [CONST.RELEASE_POKEMON_FAILED]: () => ({
      ...state,
      releasePokemonLoading: false,
      releasePokemonError: true,
      releasePokemonResponse: payload,
      action: type,
    }),
    [CONST.RELEASE_POKEMON_RESET]: () => ({
      ...state,
      releasePokemonLoading: false,
      releasePokemonError: false,
      releasePokemonResponse: {},
      action: type,
    }),
    // RELEASE_POKEMON

    // RENAME_POKEMON
    [CONST.RENAME_POKEMON]: () => ({
      ...state,
      renamePokemonLoading: true,
      renamePokemonError: false,
      renamePokemonResponse: {},
      action: type,
    }),
    [CONST.RENAME_POKEMON_SUCCESS]: () => ({
      ...state,
      renamePokemonLoading: false,
      renamePokemonError: false,
      renamePokemonResponse: payload,
      action: type,
    }),
    [CONST.RENAME_POKEMON_FAILED]: () => ({
      ...state,
      renamePokemonLoading: false,
      renamePokemonError: true,
      renamePokemonResponse: payload,
      action: type,
    }),
    [CONST.RENAME_POKEMON_RESET]: () => ({
      ...state,
      renamePokemonLoading: false,
      renamePokemonError: false,
      renamePokemonResponse: {},
      action: type,
    }),
    // RENAME_POKEMON

    DEFAULT: () => state,
  };

  return (actions[type] || actions.DEFAULT)();
};
