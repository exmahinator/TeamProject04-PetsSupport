import style from './NewsEmpty.module.scss'

export const NewsEmpty = () => {
    return (
        <div className={style.wrapper}>
            <p  className={style.text}>Oops, it seems like we haven't found anything for you ... Try another search, please</p>
        </div>
    )
}