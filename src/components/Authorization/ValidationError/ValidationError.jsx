import styles from './ValidationError.module.scss'


export const ValidationError = ({ children }) => {
    return (
        <p className={styles.error}>{children}</p>
    )
}