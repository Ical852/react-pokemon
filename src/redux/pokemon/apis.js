import axios from "axios";
import { pokeBaseUrl, setupEvolutions } from "../../utils";

export const pokemonApis = {
  getAllPokemons: async (payload) => {
    try {
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

        try {
          const getColor = await api.getPokemonColor(getDetail.id);
          if (getColor !== null) {
            results[i].color = getColor;
          }
        } catch (error) {}

        try {
          const getGroup = await api.getPokemonGroup(getDetail.id);
          if (getGroup !== null) {
            results[i].detail.group = getGroup;
          }
        } catch (error) {}

        const getSpecies = await api.getPokemonSpecies(getDetail.id);
        if (getSpecies === null) throw failtxt;
        results[i].detail.speciesDetail = getSpecies;

        payload.setCount(i+1);
      }

      for (let i = 0; i < results.length; i++) {
        const evolveUrl = results[i].detail.speciesDetail.evolution_chain.url;
        const getEvolves = await api.getPokemonEvolutions(evolveUrl);
        if (getEvolves === null) throw failtxt;
        try {
          const setupResults = isExtend ? [...results, ...payload.results] : results;
          const evolutions = setupEvolutions(getEvolves, setupResults);
          results[i].detail.evolutions = evolutions;
        } catch (e) {}
      }
      
      return pokemons;
    } catch (error) {
      alert(error.message);
    }
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
