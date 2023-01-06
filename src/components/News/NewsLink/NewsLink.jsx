import styles from './NewsLink.module.scss'

export const NewsLink = ({ link }) =>  <a className={styles.link} href={link}>Read more</a>
