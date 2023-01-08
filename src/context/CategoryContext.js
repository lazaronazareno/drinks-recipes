import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const CategoryContext = createContext()

const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

    const response = await axios.get(url)

    setCategories(response.data.drinks)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <CategoryContext.Provider
      value={{ categories }}
    >
      {props.children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider
