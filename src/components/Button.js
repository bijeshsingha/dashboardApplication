import React from 'react'

import { useStateContext } from '../context/ContextProvider';

const Button = ({color, bgColor, text, size, borderRadius, icon}) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button type="button" style={{backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={() => setIsClicked(initialState)}
    >
      {icon}{text}
    </button>
  )
}

export default Button