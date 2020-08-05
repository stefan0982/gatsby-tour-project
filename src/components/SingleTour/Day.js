import React, { useState } from 'react'
import { FaAngleDown }     from 'react-icons/all'
import styles              from '../../css/day.module.css'

const Day = ({ day, info }) => {

  const [showInfo, setShowInfo] = useState( false )

  const handleClick = () => {
    setShowInfo( showInfo => !showInfo )
  }

  return (
    <article className={ styles.day }>
      <h4>{ day }
        <button
          className={ styles.btn }
          onClick={ handleClick }
        ><FaAngleDown /></button>
      </h4>
      { showInfo
        && <p>{ info }</p> }

    </article>
  )
}

export default Day