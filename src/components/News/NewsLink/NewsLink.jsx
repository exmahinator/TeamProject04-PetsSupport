import styles from './NewsLink.module.scss'


export const NewsLink = ({ link }) => {
    return (
        <a className={styles.link} href={link}>Read more</a>
    )
}