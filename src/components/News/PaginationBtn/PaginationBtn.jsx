export const PaginationBtn = ({value, setPage}) => {
    return (
        <button onClick={()=>setPage(value)}>{value }</button>
    )
}