import React, { useCallback, useMemo } from 'react'
import { getPokeColors } from '../../../utils';

const BaseStatSecion = (props) => {
  const { pokemon } = props;

  const reformat = useCallback((stat) => {
    if (stat === 'special-attack' || stat === 'special-defense') {
      const split = stat.split('-')[1];

      return `Sp. ${split[0]}${split[1]}${split[2]}`
    }
    return stat;
  }, []);

  const getTotal = useMemo(() => {
    let total = 0;
    pokemon.detail.stats.map((stat) => total += stat.base_stat);
    return total;
  }, [pokemon]);

  const getPercentage = useCallback((stat) => {
    if (stat === 100) return '100';
    return (stat).toString()
  }, []);

  return (
    <div className='flex-1 bg-white rounded-md p-5'>
      <span className='text-black text-base font-bold'>Base Stats</span>
      <div className='flex flex-row mt-3'>
        <div className='w-20 flex flex-col'>
          {pokemon.detail.stats?.map((stat) => {
            return (
              <span className='mb-1 text-md text-gray-500 font-light capitalize'>{reformat(stat.stat.name)}</span>
            )
          })}
          <span className='mb-1 text-md text-gray-500 font-light capitalize'>Total</span>
        </div>
        <div className='min-w-8 flex flex-col ml-5'>
          {pokemon.detail.stats?.map((stat) => {
            return (
              <span className='mb-1 text-md text-black font-semibold capitalize'>{stat.base_stat}</span>
            )
          })}
          <span className='mb-1 text-md text-black font-semibold capitalize'>{getTotal}</span>
        </div>
        <div className='flex-1 min-w-20 sm:min-w-40 md:min-w-40 flex flex-col ml-5 relative'>
          {pokemon.detail.stats?.map((stat) => {
            return (
              <div className='h-7 justify-center flex flex-col'>
                <div className='h-1 bg-gray-500 rounded-full'></div>
                <div 
                  className='h-1 rounded-full'
                  style={{ 
                    marginTop: -4,
                    width: `${getPercentage(stat.base_stat)}%`,
                    backgroundColor: getPokeColors(pokemon.detail?.types?.[0]?.type?.name)
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className='mt-5'>
        <span className='text-black text-base font-bold'>Type Defense :</span>
        <span className='text-gray-500 text-md font-light ml-5'>The effectivenneess of eacth type of venusaur</span>
      </div>
    </div>
  );
}

export default BaseStatSecion;