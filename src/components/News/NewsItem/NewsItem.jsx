import { NewsLink } from "../NewsLink/NewsLink"
import styles from './NewsItem.module.scss'

export const NewsItem = ({ data: {title, text, link, date} }) => {
    return (
        <div>
            <article>
                <h4>{ title}</h4>
                <p>{text}</p>
                <div className={styles.details}>

                <span >{ date}</span>
                <NewsLink link={link}/>
                </div>
            </article>
        </div>
    )
}