export const showRecipeIngredients = (data) => {
  const list = []

  for (let i = 1; i < 16; i++) {
    if (data[`strIngredient${i}`]) {
      list.push(data[`strIngredient${i}`])
    }
  }
  return list
}

export const showRecipePreparation = (preparation) => {
  const list = preparation.split(/,|\./)
  list.pop()

  return list
}
