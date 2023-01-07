import { NewsItem } from '../NewsItem/NewsItem'

import styles from './NewsList.module.scss'

export const NewsList = ({data}) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {data.map(({ _id, ...details }) => {
                    return <NewsItem key={_id} data={details} />
                })}
            </ul>
        </div>
    )
}