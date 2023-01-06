import styles from './NewsHeading.module.scss'
export const NewsHeading = ({ children }) => {
    return (
        <h3 className={styles.heading}>{children}</h3>
    )
}