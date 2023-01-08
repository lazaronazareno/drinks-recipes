import React from 'react'
import { showRecipeIngredients, showRecipePreparation } from '../utils'

const ModalContent = ({ recipe }) => {
  let preparation = []

  if (Object.keys(recipe).length > 0 && recipe.strInstructions !== undefined) {
    preparation = showRecipePreparation(recipe.strInstructions)
  }

  const ingredients = showRecipeIngredients(recipe)

  return (
    <div className='drink-content'>
      <div className='drink-content_image'>
        <img
          src={recipe.strDrinkThumb}
          alt={recipe.strDrink}
        />
      </div>
      <div className='drink-content_recipe'>
        <h1>{recipe.strDrink}</h1>
        <h3>{recipe.strAlcoholic} / {recipe.strGlass}</h3>
        <span>{recipe.strMeasure1 ? `Measure : ${recipe.strMeasure1}` : null}</span>
        <div className='drink-content_recipe-container'>
          <div className='drink-content_recipe-ingredients'>
            <h3>Ingredients</h3>
            {ingredients.map(item => (
              <li key={item}>{item}</li>
            ))}
          </div>
          <div className='drink-content_recipe-ingredients'>
            <h3>Steps</h3>
            {preparation.map(item => (
              <li key={item}>{item}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalContent
