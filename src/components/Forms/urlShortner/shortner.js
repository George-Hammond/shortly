import React from 'react'
import './shortner.css'

const Shortner = () => {
  return (
    <div>
      <form className='shortner-form'>
          <input type='url' placeholder='Shorten a link here...' />
          <input type='submit' value='shorten it!'/>
      </form>
    </div>
  )
}

export default Shortner
