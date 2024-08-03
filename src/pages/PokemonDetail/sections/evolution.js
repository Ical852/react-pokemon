import React, { useCallback } from 'react';
import { Carousel } from "react-responsive-carousel"; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Badge } from '../../../components';
import { getPokeColors } from '../../../utils';

const EvolutionSecion = (props) => {
  const { pokemon } = props;
  const getGifs = useCallback((detail) => {
    const gifs = [];
    gifs.push(detail.sprites.other.showdown.front_default);
    Object.keys(detail.sprites.other.showdown).map((key) => {
      if (detail.sprites.other.showdown[key] !== null && key !== 'front_default') {
        gifs.push(detail.sprites.other.showdown[key])
      }
    })

    return gifs;
  }, []);

  const reformat = useCallback((stat) => {
    if (stat === 'special-attack' || stat === 'special-defense') {
      const split = stat.split('-')[1];

      return `Sp. ${split[0]}${split[1]}${split[2]}`
    }
    return stat;
  }, []);

  const getTotal = useCallback((evo) => {
    let total = 0;
    evo.stats.map((stat) => total += stat.base_stat);
    return total;
  }, [pokemon]);

  const getPercentage = useCallback((stat) => {
    if (stat === 100) return '100';
    return (stat).toString()
  }, []);

  return (
    <div className='bg-white w-full p-5 rounded-md mt-5'>
      <span className='text-black text-base font-bold'>Evolutions</span>
      {pokemon.detail.evolutions.map((evo, idx) => {
        return (
          <div className='mt-5'>
            <span
              className='text-xl capitalize font-semibold'
              style={{ color: getPokeColors(evo.types[0].type.name) }}>
              {idx+1}. {evo.name}
            </span>
            <div className='mt-3'>
              {evo?.types?.map((typ) => {
                return (
                  <span className="mr-1">
                    <Badge type={typ} />
                  </span>
                )
              })}
            </div>
            <div className='mt-3 w-full'>
              <Carousel showThumbs={false} infiniteLoop>
                {getGifs(evo).map((gif) => {
                  return (
                    <img src={gif} className="h-40 object-contain mt-5" />
                  )
                })}
              </Carousel>
            </div>
            <div className='flex flex-row mt-3'>
              <div className='w-20 flex flex-col'>
                {evo.stats?.map((stat) => {
                  return (
                    <span className='mb-1 text-md text-gray-500 font-light capitalize'>{reformat(stat.stat.name)}</span>
                  )
                })}
                <span className='mb-1 text-md text-gray-500 font-light capitalize'>Total</span>
              </div>
              <div className='min-w-8 flex flex-col ml-5'>
                {evo.stats?.map((stat) => {
                  return (
                    <span className='mb-1 text-md text-black font-semibold capitalize'>{stat.base_stat}</span>
                  )
                })}
                <span className='mb-1 text-md text-black font-semibold capitalize'>{getTotal(evo)}</span>
              </div>
              <div className='flex-1 min-w-20 sm:min-w-40 md:min-w-40 flex flex-col ml-5 relative'>
                {evo.stats?.map((stat) => {
                  return (
                    <div className='h-7 justify-center flex flex-col'>
                      <div className='h-1 bg-gray-500 rounded-full'></div>
                      <div 
                        className='h-1 rounded-full'
                        style={{ 
                          marginTop: -4,
                          width: `${getPercentage(stat.base_stat)}%`,
                          backgroundColor: getPokeColors(evo?.types?.[0]?.type?.name)
                        }}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default EvolutionSecion;