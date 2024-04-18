import React, { Children } from 'react'
import styles from "./Description.module.css"

const Description = ({children, variant}) => {
  return (
    <div className={variant ? `${styles.desc } ${styles.descVariant2}` : styles.desc}>{children}</div>
  )
}

export default Description