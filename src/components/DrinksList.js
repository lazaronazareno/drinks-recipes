import React, { useContext } from 'react'
import { DrinksContext } from '../context/DrinksContext'
import DrinkDetails from './DrinkDetails'
import Loading from './Loading'

const DrinksList = () => {
  const { drinks, loading } = useContext(DrinksContext)
  return (
    <div className='d-flex flex-wrap gap-2 p-1 justify-content-center'>
      {
        loading
          ? (
            <div className='d-flex w-100 justify-content-center'>
              <Loading />
            </div>
            )
          : drinks.map(drink => (
            <DrinkDetails key={drink.idDrink} drink={drink} />
          ))

      }
    </div>
  )
}

export default DrinksList
