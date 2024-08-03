export const pokeBaseUrl = "https://pokeapi.co/api/v2/";
export const restBaseUrl = "http://localhost:5000/api/";
export const RESPONSE_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  NEED_ACTION: 300,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  ERROR: 500,
  FAILED: 501,
};
export const copyData = (data, def) => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return def;
  }
};
export const getPokeColors = (type) => {
  const colors = {
    normal: "#b9bbb7",
    poison: "#a55c9c",
    psychic: "#b9bbb7",
    grass: "#8cd550",
    ground: "#e8c454",
    ice: "#95f1fe",
    fire: "#f95542",
    rock: "#cfbd73",
    dragon: "#8a75fd",
    water: "#55aefe",
    bug: "#c3d21f",
    dark: "#8d6855",
    fighting: "#ad594c",
    ghost: "#7875d6",
    steel: "#c3c1da",
    flying: "#78a5ff",
    electric: "#fbe33b",
    fairy: "#fcaeff",
  };

  if (type === null) return colors.normal;
  return colors[type];
};
export const getPokeImg = (detail) => {
  if (detail?.sprites?.other?.showdown?.front_default !== null) {
    return detail.sprites.other.showdown.front_default;
  }
  return detail.sprites.front_default;
}
export const setupEvolutions = (evolutions, results) => {
  const setupEvolves = [];

  let minFind = evolutions?.chain?.species?.name;
  let midSet = evolutions?.chain?.evolves_to;
  let midFind = null;
  let maxFind = null;

  if (midSet !== null && midSet?.length > 0) {
    midFind = midSet?.[0]?.species?.name;
    var maxSet = midSet?.[0]?.evolves_to;
    if (maxSet !== null && maxSet?.length > 0) {
      maxFind = maxSet?.[0]?.species?.name;
    }
  }

  if (minFind != null) {
    try {
      const minFinded = results?.find((find) => find?.name === minFind);
      if (minFinded?.name !== null) {
        setupEvolves.push(minFinded.detail);
      }
    } catch (e) {}
  }

  if (midFind != null) {
    try {
      const midFinded = results.find((find) => find?.name === midFind);
      if (midFinded?.name !== null) {
        setupEvolves.push(midFinded.detail);
      }
    } catch (e) {}
  }

  if (maxFind != null) {
    try {
      const maxFinded = results.find((find) => find?.name === maxFind);
      if (maxFinded?.name !== null) {
        setupEvolves.push(maxFinded.detail);
      }
    } catch (e) {}
  }

  return setupEvolves;
};
