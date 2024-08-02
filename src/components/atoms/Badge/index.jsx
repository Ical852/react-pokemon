import React from 'react'
import { getPokeColors } from '../../../utils';

const Badge = (props) => {
  const { type } = props;

  return (
    <div 
      className='px-3 rounded-full border border-white mb-1 text-white'
      style={{ backgroundColor: getPokeColors(type.type.name) }}>
      {type.type.name}
    </div>
  )
}

export default Badge