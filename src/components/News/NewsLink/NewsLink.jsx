import style from './NewsLink.module.scss'

export const NewsLink = ({ link }) =>  <a className={style.link} href={link} target="_blank"  rel="noopener noreferrer">Read more</a>
