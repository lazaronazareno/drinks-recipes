import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const DrinksContext = createContext()

const DrinksProvider = (props) => {
  const [drinks, setDrinks] = useState([])
  const [searchDrinks, setSearchDrinks] = useState({
    ingredient: '',
    category: ''
  })
  const [isSearching, setIsSearching] = useState(false)

  const getDrinks = async () => {
    const { ingredient, category } = searchDrinks
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`

    const response = await axios.get(url)

    setDrinks(response.data.drinks)
  }

  useEffect(() => {
    if (isSearching) {
      getDrinks()
    }
  }, [searchDrinks])

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        setSearchDrinks,
        setIsSearching
      }}
    >
      {props.children}
    </DrinksContext.Provider>
  )
}

export default DrinksProvider
