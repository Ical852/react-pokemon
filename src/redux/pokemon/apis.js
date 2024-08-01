import axios from "axios";
import { pokeBaseUrl, setupEvolutions } from "../../utils";
import {
  setCount,
  resetCount,
  setExtendCount,
  resetExtendCount,
} from "./actions";

export const pokemonApis = {
  getAllPokemons: async (payload, dispatch) => {
    const api = pokemonApis;
    const failtxt = "Failed to get pokemon data";
    let url = pokeBaseUrl + "pokemon";
    let isExtend = false;
    if (payload?.url) {
      url = payload?.url;
      isExtend = true;
    }

    const pokemons = (await axios.get(url)).data;
    const results = pokemons.results;

    if (results === null) throw failtxt;

    for (let i = 0; i < results.length; i++) {
      if (results[i].url === null) throw failtxt;

      const getDetail = await api.getPokemonDetail(results[i].url);
      if (getDetail === null) throw failtxt;
      results[i].detail = getDetail;
      if (getDetail.id === null) throw failtxt;

      const getColor = await api.getPokemonColor(getDetail.id);
      if (getColor !== null) {
        results[i].color = getColor;
      }

      const getGroup = await api.getPokemonGroup(getDetail.id);
      if (getGroup !== null) {
        results[i].detail.group = getGroup;
      }

      const getSpecies = await api.getPokemonSpecies(getDetail.id);
      if (getSpecies === null) throw failtxt;
      results[i].detail.speciesDetail = getSpecies;

      if (isExtend) {
        dispatch(setExtendCount());
      } else {
        dispatch(setCount());
      }
    }

    for (let i = 0; i < results.length; i++) {
      const evolveUrl = results[i].detail.speciesDetail.evolutionChain.url;
      const getEvolves = await api.getPokemonEvolutions(evolveUrl);
      if (getEvolves === null) throw failtxt;
      try {
        const setupResult = isExtend
          ? [...results, ...payload.pokemon.results]
          : results;
        const evolutions = setupEvolutions(getEvolves, setupResult);
        results[i].detail.evolutions = evolutions;
      } catch (e) {}
    }

    if (isExtend) {
      dispatch(resetExtendCount());
    } else {
      dispatch(resetCount());
    }

    return pokemons;
  },
  getPokemonDetail: async (url) => {
    const response = await axios.get(url);
    return response.data;
  },
  getPokemonColor: async (id) => {
    const response = await axios.get(pokeBaseUrl + "pokemon-color/" + id);
    return response.data;
  },
  getPokemonGroup: async (id) => {
    const response = await axios.get(pokeBaseUrl + "egg-group/" + id);
    return response.data;
  },
  getPokemonSpecies: async (id) => {
    const response = await axios.get(pokeBaseUrl + "pokemon-species/" + id);
    return response.data;
  },
  getPokemonEvolutions: async (evolveUrl) => {
    const response = await axios.get(evolveUrl);
    return response.data;
  },
};
