import React from 'react'
import '../styles/Header.scss'

const Header = () => {
  return (
    <header className="Header container">
      <div className="Header__content">
        <div className="Header__content__logo">Zurveys.xyz</div>
        <div className="Header__content_link">
          <span><a href="#">Logout</a></span>
        </div>
      </div>
        
    </header>
  )
}

export default Header