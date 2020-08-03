import React       from 'react'
import socialIcons from '../constants/social-icons'
import { Link }    from 'gatsby'

import styles from '../css/footer.module.css'
import links  from '../constants/links'

const Footer = () => {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.links }>
        { links.map( (link, i) => (
          <Link
            key={ i }
            to={ link.path }
          >{ link.text }</Link>
        ) ) }
      </div>
      <div className={ styles.icons }>
        { socialIcons.map( (icon, i) => (
          <a
            href={ icon.url }
            key={ i }
            target="_blank"
            rel="noreferrer"
          >{ icon.icon }</a>
        ) ) }
      </div>
      <div className={ styles.copyright }>
        copyright &copy; backroads travel company { new Date().getFullYear() } all rights reserved
      </div>
    </footer>
  )
}

export default Footer
