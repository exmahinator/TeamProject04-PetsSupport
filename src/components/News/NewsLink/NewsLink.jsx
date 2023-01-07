import styles from './NewsLink.module.scss'

export const NewsLink = ({ link }) =>  <a className={styles.link} href={link} target="_blank"  rel="noopener noreferrer">Read more</a>
