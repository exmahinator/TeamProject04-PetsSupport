import {data} from '../mockNews'
import { NewsItem } from '../NewsItem/NewsItem'

import styles from './NewsList.module.scss'

export const NewsList = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {data.map(({ id, ...details }) => {
                    return <NewsItem key={id} data={details} />
                })}
            </ul>
        </div>
    )
}