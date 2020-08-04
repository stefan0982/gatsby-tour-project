import React  from 'react'
import Title  from '../Title.styled'
import styles from '../../css/contact.module.css'

const ContactForm = () => {
  return (
    <section className={ styles.contact }>
      <Title
        title="Contact"
        subtitle="us"
      />
      <div className={ styles.center }>
        <form action="https://formspree.io/xeqrnrng" method="POST" className={ styles.form }>
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={ styles.formControl }
              placeholder="your name"
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={ styles.formControl }
              placeholder="your email"
            />
          </div>
          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="hello there"
              className={styles.formControl}
            />
          </div>
          <div>
            <input type="submit" value="submit here" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
