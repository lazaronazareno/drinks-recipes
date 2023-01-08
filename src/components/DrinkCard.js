import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

const DrinkCard = ({ handleOpen, strDrinkThumb, strDrink }) => {
  const [showDiv, setShowDiv] = useState(false)
  const [{ y, color }, set] = useSpring(() => ({ y: 0, color: '' }))

  return (
    <>
      <animated.img
        src={strDrinkThumb}
        alt={strDrink}
        className='drink-image'
        onMouseEnter={() => {
          setShowDiv(!showDiv)
          set.start({ y: 100, color: '#fff' })
        }}
      />
      <animated.div
        className='drink-info'
        style={{
          display: y.to(d => `${d === 0 ? 'none' : 'flex'}`),
          opacity: y.to(v => `${v}%`),
          backgroundColor: color,
          transition: 'all .1s ease'
        }}
        onMouseLeave={() => {
          setShowDiv(!showDiv)
          set.start({ y: 0, color: '' })
        }}
        onClick={handleOpen}
      >
        <span>{strDrink}</span>
      </animated.div>

    </>
  )
}

export default DrinkCard
