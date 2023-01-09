import style from './PaginationBtn.module.scss'

export const PaginationBtn = ({ value, setPage }) => {
    return (
        <button className={style.btn} onClick={()=>setPage(value)}>{value }</button>
    )
}