import React, { useContext, useState } from 'react'
import { RecipesContext } from '../context/RecipesContext'
import './Drink.css'
import ModalContainer from './ModalContainer'
import DrinkCard from './DrinkCard'
import ModalContent from './ModalContent'
import { useDisableBodyScroll } from '../hooks/useDisableBodyScroll'

const DrinkDetails = ({ drink }) => {
  const [open, setOpen] = useState(false)

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

  useDisableBodyScroll(open)

  return (
    <div
      className='d-flex flex-column drink-container'
      style={{ content: 'asdasdasd' }}
    >

      <DrinkCard
        handleOpen={handleOpen}
        strDrink={strDrink}
        strDrinkThumb={strDrinkThumb}
      />

      {
        recipe &&
          <ModalContainer
            open={open}
            handleButtonClick={handleClose}
          >
            <ModalContent recipe={recipe} />

          </ModalContainer>
      }

    </div>
  )
}

export default DrinkDetails
