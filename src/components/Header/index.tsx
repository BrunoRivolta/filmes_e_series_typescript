import React from 'react'
import styles from './Header.module.scss'
import logoNerdFlix from 'assets/nerdflix.png'
import userPhoto from 'assets/user.png'
import { IoMdNotifications, IoMdSearch } from 'react-icons/io'

export default function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logoNerdFlix} alt="Logo NerdFlix"/>
        <ul className={styles.header__nav}>
          <li>Inicio</li>
          <li>Filmes</li>
          <li>Adicionar</li>
        </ul>
      </div>
        <div className={styles.header__user}>
            <IoMdSearch className={styles.header__icon}/>
            <input type="text" />
            <IoMdNotifications className={styles.header__icon}/>
            <img src={userPhoto} alt="Foto do usuario" />
        </div>
    </section>
  )
}
