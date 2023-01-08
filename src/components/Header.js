import React from 'react'

const Header = ({ heading }) => {
  return (
    <h1
      className='d-flex justify-content-center bg-dark text-white'
    >{heading}
    </h1>
  )
}

export default Header
