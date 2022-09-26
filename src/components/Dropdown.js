import React, { useState } from 'react'
import arrowDown from '../assets/arrow-down.png'
import arrowUp from '../assets/arrow-up.png'

const Dropdown = ({ title, content, className }) => {
  const [buttonState, setButtonState] = useState(false)

  return (
    <div className={className ? 'dropdown ' + className : 'dropdown'}>
      <button
        className="dropdown__title"
        onClick={() => setButtonState(!buttonState)}
      >
        {title}
        <img
          src={buttonState ? arrowUp : arrowDown}
          alt="Icone"
          className="dropdown__icon"
        />
      </button>
      {buttonState && (
        <div className="dropdown__content">
          {typeof content === 'object' ? (
            <ul>
              {content.map((elt, index) => {
                return <li key={index}>{elt}</li>
              })}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Dropdown
