import React, { useContext, useState } from 'react'
import { RecipesContext } from '../context/RecipesContext'
import { showRecipeIngredients } from '../utils'
import { useSpring, animated } from '@react-spring/web'
import './Drink.css'
import ModalContainer from './ModalContainer'

const DrinkDetails = ({ drink }) => {
  const [open, setOpen] = useState(false)
  const [showDiv, setShowDiv] = useState(false)
  const [{ y, color }, set] = useSpring(() => ({ y: 0, color: '' }))

  const handleOpen = () => {
    setIdRecipe(idDrink)
    setOpen(true)
  }

  const handleClose = () => {
    setIdRecipe(null)
    setRecipe({})
    setOpen(false)
  }

  const { idDrink, strDrink, strDrinkThumb } = drink

  const { recipe, setIdRecipe, setRecipe } = useContext(RecipesContext)

  const ingredients = showRecipeIngredients(recipe)
  return (
    <div
      className='d-flex flex-column drink-container'
      style={{ content: 'asdasdasd' }}
    >
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
      <ModalContainer
        open={open}
        handleButtonClick={handleClose}
      >
        <div>
          <h2>{recipe.strDrink}</h2>
          <h3>{recipe.strAlcoholic}</h3>
          <span>{recipe.strInstructions}</span>
          <img
            src={recipe.strDrinkThumb}
            alt={recipe.strDrink}
            style={{ width: '20rem' }}
          />
          <h3>Ingredients</h3>
          {ingredients.map(item => (
            <li key={item}>{item}</li>
          ))}
        </div>
      </ModalContainer>
    </div>
  )
}

export default DrinkDetails
