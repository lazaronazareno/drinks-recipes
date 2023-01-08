import DrinksList from './components/DrinksList'
import Form from './components/Form'
import Header from './components/Header'
import CategoryProvider from './context/CategoryContext'
import DrinksProvider from './context/DrinksContext'
import RecipesProvider from './context/RecipesContext'

function App () {
  return (
    <CategoryProvider>
      <DrinksProvider>
        <RecipesProvider>
          <Header heading='Drinks App' />
          <Form />
          <DrinksList />
        </RecipesProvider>
      </DrinksProvider>
    </CategoryProvider>
  )
}

export default App
