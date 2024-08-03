import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const useDetail = (props) => {
  const {} = props;
  const paramState = useLocation().state;

  const getGifs = useMemo(() => {
    const gifs = [];
    gifs.push(paramState.detail.sprites.other.showdown.front_default);
    Object.keys(paramState.detail.sprites.other.showdown).map((key) => {
      if (paramState.detail.sprites.other.showdown[key] !== null && key !== 'front_default') {
        gifs.push(paramState.detail.sprites.other.showdown[key])
      }
    })

    return gifs;
  }, [paramState]);

  return {
    pokemon: paramState,
    gifs: getGifs
  };
};
