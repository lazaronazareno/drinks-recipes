export const showRecipeIngredients = (data) => {
  const ingredients = []

  for (let i = 1; i < 16; i++) {
    if (data[`strIngredient${i}`]) {
      ingredients.push(data[`strIngredient${i}`])
    }
  }
  return ingredients
}
