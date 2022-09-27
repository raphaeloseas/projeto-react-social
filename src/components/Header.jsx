import React from 'react'
import styles from './Header.module.css'

import dugsterLogo from '../assets/header-svg.svg';

export function Header() {
  return (
    <header className={styles.header}>
        <a href="/"><img src={dugsterLogo} title="Dugster" alt="Logo Dugster" /></a>
        <a href=""><strong>Dugster Feed</strong></a>
    </header>
  )
}
