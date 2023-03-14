import React, { useState } from 'react'

function Sample() {
  const [color, setColor] = useState('black');
  const changeColor = () => {
    // console.log()
    if (color == 'black') {
      setColor('red')
    } else {
      setColor('black')
    }
  }

  return (
    <div>
      <h1 style={{ color: `${color}` }}>Hellow world!</h1>
      <button onClick={changeColor}>click me</button>
    </div>
  )
}

export default Sample