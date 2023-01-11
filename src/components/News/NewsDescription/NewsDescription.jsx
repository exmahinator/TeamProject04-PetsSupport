import style from './NewsDescription.module.scss'

export const NewsDescription = ({ children }) => <p className={style.text}>{children}</p>