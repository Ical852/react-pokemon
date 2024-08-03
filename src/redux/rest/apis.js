import axios from "axios";
import { restBaseUrl } from "../../utils";

export const myPokemonApis = {
  getAllMyPokemons: async () => {
    const response = await axios.get(restBaseUrl + 'pokemon');  
    return response.data;
  },
  findPokemon: async (payload) => {
    const response = await axios.post(restBaseUrl + "pokemon/find", payload);
    return response.data;
  },
  catchPokemon: async (payload) => {
    const response = await axios.post(restBaseUrl + "pokemon/catch", payload);
    return response.data;
  },
  releasePokemon: async (payload) => {
    const response = await axios.post(restBaseUrl + "pokemon/release/" + payload.id);
    return response.data;
  },
  renamePokemon: async (payload) => {
    const response = await axios.post(restBaseUrl + "pokemon/rename/" + payload.id, payload);
    return response.data;
  },
};
