import styles from "./Info.module.css"

const Info = ({title,subtitle }) => {
  return (
    <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>

    </div>
  )
}

export default Info