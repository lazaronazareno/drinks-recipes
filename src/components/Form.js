import React, { useContext, useState } from 'react'
import { CategoryContext } from '../context/CategoryContext'
import { DrinksContext } from '../context/DrinksContext'

const Form = () => {
  const [search, setSearch] = useState({
    ingredient: '',
    category: ''
  })

  const { categories } = useContext(CategoryContext)
  const { setSearchDrinks, setIsSearching } = useContext(DrinksContext)

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    setSearchDrinks(search)
    setIsSearching(true)
  }

  return (
    <form
      className='d-flex flex-column p-2'
      onSubmit={handleSubmit}
    >
      <div className='mb-3'>
        <input
          type='text'
          className='form-control form-control-lg'
          name='ingredient'
          placeholder='Type an ingredient...'
          onChange={handleChange}
        />
      </div>

      <div className='mb-3'>
        <select
          className='form-select form-select-lg'
          name='category'
          onChange={handleChange}
        >
          <option value=''>-- Select Category --</option>
          {categories.map(item => (
            <option
              key={item.strCategory}
              kvalue={item.strCategory}
            >{item.strCategory}
            </option>
          ))}
        </select>
      </div>

      <button
        type='submit'
        className='btn btn-lg btn-dark'
      >Search Drinks
      </button>
    </form>
  )
}

export default Form
