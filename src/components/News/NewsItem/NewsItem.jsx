import { NewsArticle } from "../NewsArticle/NewsArticle"
import { NewsDetails } from "../NewsDetails/NewsDetails"
import { NewsHeading } from "../NewsHeading/NewsHeading"


export const NewsItem = ({ data: {title, text, link, date} }) => {
    return (
        <div>
            <NewsArticle>
                <NewsHeading>{title}</NewsHeading>
                <p>{text}</p>
                <NewsDetails date={ date} link={link} />
            </NewsArticle>
        </div>
    )
}