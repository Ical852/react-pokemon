import {
  all
} from "redux-saga/effects";
import {
  myPokemonSaga
} from "./rest/sagas";

export default function* rootSaga() {
  yield all([
    myPokemonSaga(),
  ]);
}
