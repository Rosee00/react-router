import { Fragment } from "react";
import NewsList from "./NewsList";
import NewsCategory from "./NewsCategory";

const NewsHome = () => {

    return(
        <Fragment>
            <h3>뉴스홈 테스트</h3>
            <NewsCategory/>
            <NewsList/>
            
        </Fragment>
    )
}
export default NewsHome;