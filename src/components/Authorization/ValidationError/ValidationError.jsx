import style from './ValidationError.module.scss'


export const ValidationError = ({ children }) => {
    return (
        <p className={style.error}>{children}</p>
    )
}