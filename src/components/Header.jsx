import React from 'react'

const Header = ({text, bg, count}) => {
  return (
    <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
        {text}    
    <div className='ml-2 bg-white w-5 h-5 text-black item-cetner justify-center rounded-full flex'>{count}</div></div>
  )
}

export default Header