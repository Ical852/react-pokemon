import {
  all
} from "redux-saga/effects";
import {
  pokemonSaga
} from "./pokemon/sagas";

export default function* rootSaga() {
  yield all([
    pokemonSaga(),
  ]);
}
