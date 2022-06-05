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
                <p id='copy'>Copy</p>
            </div>
        </div>
        <div className='listedLink'>
            <p id='url-link'>https://www.frontendmentor.io</p>
            <div className='right'>
                <p id='link'>https://rel.ink/k4lKyk</p>
                <p id='copied'>Copied!</p>
            </div>
        </div>
        <div className='listedLink'>
            <p id='url-link'>https://www.frontendmentor.io</p>
            <div className='right'>
                <p id='link'>https://rel.ink/k4lKyk</p>
                <p id='copy'>Copy</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ListedLinks;
