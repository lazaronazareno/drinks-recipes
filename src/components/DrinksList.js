import React, { useContext } from 'react'
import { DrinksContext } from '../context/DrinksContext'
import DrinkDetails from './DrinkDetails'

const DrinksList = () => {
  const { drinks } = useContext(DrinksContext)
  return (
    <div className='d-flex flex-wrap gap-2'>
      {drinks.map(drink => (
        <DrinkDetails key={drink.idDrink} drink={drink} />
      ))}
    </div>
  )
}

export default DrinksList
