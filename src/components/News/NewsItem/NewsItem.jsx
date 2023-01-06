import { NewsArticle } from "../NewsArticle/NewsArticle"
import { NewsDescription } from "../NewsDescription/NewsDescription"
import { NewsDetails } from "../NewsDetails/NewsDetails"
import { NewsHeading } from "../NewsHeading/NewsHeading"


export const NewsItem = ({ data: {title, description, url, date} }) => {
    return (
        <div>
            <NewsArticle>
                <NewsHeading>{title}</NewsHeading>
                <NewsDescription>{description}</NewsDescription>
                <NewsDetails date={ date} link={url} />
            </NewsArticle>
        </div>
    )
}