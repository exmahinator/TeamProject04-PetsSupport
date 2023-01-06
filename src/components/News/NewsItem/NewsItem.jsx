import { NewsArticle } from "../NewsArticle/NewsArticle"
import { NewsDetails } from "../NewsDetails/NewsDetails"
import { NewsHeading } from "../NewsHeading/NewsHeading"


export const NewsItem = ({ data: {title, description, url, date} }) => {
    return (
        <div>
            <NewsArticle>
                <NewsHeading>{title}</NewsHeading>
                <p>{description}</p>
                <NewsDetails date={ date} link={url} />
            </NewsArticle>
        </div>
    )
}