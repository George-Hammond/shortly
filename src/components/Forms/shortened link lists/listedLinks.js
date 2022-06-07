import React from 'react'
import './listedLinks.css';

const ListedLinks = () => {
  return (
    <div>
      <div className='listedLinks-container'>
        <div className='listedLink'>
            <p id='url-link'>https://www.frontendmentor.io</p>
            <div className='right'>
                <p id='link'>https://rel.ink/k4lKyk</p>
                <button id='copy'>Copy</button>
            </div>
        </div>
        <div className='listedLink'>
            <p id='url-link'>https://twitter.com/frontendmentor</p>
            <div className='right'>
                <p id='link'>https://rel.ink/gxOXp9</p>
                <button id='copied'>Copied!</button>
            </div>
        </div>
        <div className='listedLink'>
            <p id='url-link'>https://www.linkedin.com/company/frontend-mentor</p>
            <div className='right'>
                <p id='link'>https://rel.ink/gob3X9</p>
                <button id='copy'>Copy</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ListedLinks;
