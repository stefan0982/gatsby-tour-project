import React, { useState } from 'react'
import styles              from '../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/all'
import links            from '../constants/links'
import socialIcons from '../constants/social-icons'
import logo from '../images/logo.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState( false )

  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img
            src={logo}
            alt="logo"
          />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon}/>
          </button>
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((link, i) => (
            <li key={i}><AniLink fade to={link.path}>{link.text}</AniLink></li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((icon,i) => (
            <a key={i} href={icon.url} target="_blank" rel="noreferrer">{icon.icon}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
