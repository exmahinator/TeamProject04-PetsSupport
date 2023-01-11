import { formatDate } from "shared/functions/formatDate"
import { NewsArticle } from "../NewsArticle/NewsArticle"
import { NewsDescription } from "../NewsDescription/NewsDescription"
import { NewsDetails } from "../NewsDetails/NewsDetails"
import { NewsHeading } from "../NewsHeading/NewsHeading"



export const NewsItem = ({ data: { title, description, url, date } }) => {
    const optimizedDate = formatDate(date)
    return (
        <div>
            <NewsArticle>
                <NewsHeading>{title}</NewsHeading>
                <NewsDescription>{description}</NewsDescription>
                <NewsDetails date={ optimizedDate} link={url} />
            </NewsArticle>
        </div>
    )
}