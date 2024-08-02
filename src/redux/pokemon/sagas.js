import {
  takeLatest,
  call,
  put
} from "redux-saga/effects";
import {
  pokemonApis
} from "./apis";
import {
  GET_ALL_POKEMONS,
  EXTEND_POKEMONS
} from "./constants";
import {
  getAllPokemonsSuccess,
  getAllPokemonsFailed,
  extendPokemonsSuccess,
  extendPokemonsFailed,
} from "./actions";

function* getAllPokemonsSaga() {
  try {
    const response = yield call(
      pokemonApis.getAllPokemons,
    );
    yield put(getAllPokemonsSuccess(response));
  } catch (error) {
    yield put(getAllPokemonsFailed({
      message: `Error: ${error.message}`
    }));
  }
}

function* extendPokemonsSaga(payload) {
  try {
    const response = yield call(
      pokemonApis.extendPokemons,
      payload,
    );
    yield put(extendPokemonsSuccess(response));
  } catch (error) {
    yield put(extendPokemonsFailed({
      message: `Error: ${error.message}`
    }));
  }
}

export function* pokemonSaga() {
  yield takeLatest(GET_ALL_POKEMONS, getAllPokemonsSaga);
  yield takeLatest(EXTEND_POKEMONS, extendPokemonsSaga);
}
