import React from 'react'
import Title from '../Title.styled'

import styles   from '../../css/services.module.css'
import services from '../../constants/services'

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services"/>
      <div className={styles.center}>
        {services.map((serv, i) => (
          <article className={styles.service} key={i}>
            <span>{serv.icon}</span>
            <h4>{serv.title}</h4>
            <p>{serv.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
