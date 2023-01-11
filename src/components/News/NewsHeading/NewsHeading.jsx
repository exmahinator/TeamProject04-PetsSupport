import style from './NewsHeading.module.scss'
export const NewsHeading = ({ children }) => {
    return (
        <>
        <h3 className={style.heading}>{children}</h3>
        <p className={style.tooltip}>{children}</p>
        </>
    )
}