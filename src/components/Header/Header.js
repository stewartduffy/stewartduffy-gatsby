import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link, { navigateTo } from 'gatsby-link'
import { Nav } from '../Nav'
import logo from '../../img/logo-compressed.svg'
import styles from './Header.module.scss'

const Header = ({ data, location }) => (
  <div className={styles['header']}>
    <img
      className={styles['heading-logo']}
      src={logo}
      alt="Stewart Duffy / Front-End Developer"
    />
  </div>
)

export default Header
