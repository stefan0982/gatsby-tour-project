import React from 'react'
import Title from '../Title.styled'

import img from '../../images/defaultBcg.jpeg'

import styles from '../../css/about.module.css'

const About = () => {
  return (
    <section className={ styles.about }>
      <Title
        title="about"
        subtitle="us"
      />
      <div className={ styles.aboutCenter }>
        <article className={ styles.aboutImg }>
          <div className={ styles.imgContainer }>
            <img
              src={ img }
              alt="img"
            />
          </div>
        </article>
        <article className={ styles.aboutInfo }>
          <h4>explore the difference</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
             corporis cum dignissimos excepturi maiores omnis quas quisquam
             sapiente sed tenetur!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
             consequatur debitis distinctio eaque esse explicabo hic iure
             officiis ratione recusandae.</p>
          <button
            type="button"
            className="btn-primary"
          >read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
