export const pokeBaseUrl = "https://pokeapi.co/api/v2/";
export const restBaseUrl = "http://localhost:5000/api/";
export const copyData = (data, def) => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return def;
  }
};
export const setupEvolutions = (evolutions, results) => {
  const setupEvolves = [];

  let minFind = evolutions?.chain?.species?.name;
  let midSet = evolutions?.chain?.evolvesTo;
  let midFind = null;
  let maxFind = null;

  if (midSet !== null && midSet?.length > 0) {
    midFind = midSet?.[0]?.species?.name;
    var maxSet = midSet?.[0]?.evolvesTo;
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
      const midFinded = results.find((find) => find?.name == midFind);
      if (midFinded?.name !== null) {
        setupEvolves.add(midFinded.detail);
      }
    } catch (e) {}
  }

  if (maxFind != null) {
    try {
      const maxFinded = results.find((find) => find?.name == maxFind);
      if (maxFinded?.name !== null) {
        setupEvolves.add(maxFinded.detail);
      }
    } catch (e) {}
  }

  return setupEvolves;
};
