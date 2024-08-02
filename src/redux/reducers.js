import {
  combineReducers
} from "redux";
import {
  myPokemonReducers
} from "./rest/reducers";

const reducers = combineReducers({
  myPokemon: myPokemonReducers,
});

export default reducers;
