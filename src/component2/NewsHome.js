import { Fragment } from "react";
import NewsList from "./NewsList";
import NewsCategory from "./NewsCategory";

const NewsHome = () => {

    return(
        <Fragment>
            
            <NewsCategory/>
            <NewsList/>
            
        </Fragment>
    )
}
export default NewsHome;