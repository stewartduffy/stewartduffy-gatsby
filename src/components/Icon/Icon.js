import React from 'react'
import styles from './Icon.module.scss'
import TimesCircle from '../../svg-icons/times-circle.svg'
import * as Icons from '../../svg-icons'

const Icon = ({ name }) => {
  const MyIcon = Icons[name] ? Icons[name] : TimesCircle

  return (
    <i className={styles['icon']}>
      <MyIcon />
    </i>
  )
}

export default Icon
