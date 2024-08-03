import React from 'react'

const DetailSection = (props) => {
  const { pokemon } = props;

  return (
    <div className="bg-white p-5 flex-1 rounded-md">
      <span className='text-black text-base font-bold'>About</span>
      <div className='flex flex-row mt-3'>
        <div className='w-20 flex flex-col'>
          <span className='mb-1 text-md text-gray-500 font-light'>Species</span>
          <span className='mb-1 text-md text-gray-500 font-light'>Height</span>
          <span className='mb-1 text-md text-gray-500 font-light'>Weight</span>
          <span className='mb-1 text-md text-gray-500 font-light'>Abilities</span>
        </div>
        <div className='flex-1 min-w-40 flex flex-col ml-5'>
          <span className='mb-1 text-md text-black font-semibold capitalize'>{pokemon.name}</span>
          <span className='mb-1 text-md text-black font-semibold'>{pokemon.detail.height} cm</span>
          <span className='mb-1 text-md text-black font-semibold'>{pokemon.detail.weight} kg</span>
          <span className='mb-1 text-md text-black font-semibold capitalize'>
            {pokemon.detail.abilities.map((abl) => abl.ability.name).join(', ')}
          </span>
        </div>
      </div>
      <div className='mt-5'>
        <span className='text-black text-base font-bold'>Breeding</span>
        <div className='flex flex-row mt-3'>
          <div className='w-20 flex flex-col'>
            <span className='mb-1 text-md text-gray-500 font-light'>Gender</span>
            <span className='mb-1 text-md text-gray-500 font-light'>Egg Groups</span>
            <span className='mb-1 text-md text-gray-500 font-light'>Egg Cycle</span>
          </div>
          <div className='flex-1 min-w-40 flex flex-col ml-5'>
            <span className='mb-1 text-md text-black font-semibold'>Male, Felame</span>
            <span className='mb-1 text-md text-black font-semibold capitalize'>{pokemon.detail?.group?.name ?? 'none'}</span>
            <span className='mb-1 text-md text-black font-semibold'>Weight</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;