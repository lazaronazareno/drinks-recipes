import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const RecipesContext = createContext()

const RecipesProvider = (props) => {
  const [idRecipe, setIdRecipe] = useState(null)
  const [recipe, setRecipe] = useState({})

  const getRecipe = async () => {
    if (!idRecipe) return

    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`

    const response = await axios.get(url)

    setRecipe(response.data.drinks[0])
  }

  useEffect(() => {
    getRecipe()
  }, [idRecipe])
  return (
    <RecipesContext.Provider
      value={{
        recipe,
        setIdRecipe,
        setRecipe
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  )
}

export default RecipesProvider
