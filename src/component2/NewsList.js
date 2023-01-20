import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewArticle";

import styled from './NewsList.module.css'; //css


const NewsList = () => {
    
    //1. API 가져오기
    //d6ff9cd6993642199eb4c1a5c250a648

    //5. 라우터로 들오는 값 처리
    const {category} = useParams();
    //category가 없거나 undefined이면 all로 할당 
    const query = (category || 'all') === 'all' ? '' : `&category=${category}`//
    // console.log(query);


    //2. useEffect에서 화면로딩시 데이터처리
    
    const [data, setData] = useState();

    useEffect(() => {

        // useEffect는 내장함수라 async를 걸면 이상해질수있다. 그래서 즉시실행 함수를 하나만들고 async걸어준다.
        (async() => {
            const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d6ff9cd6993642199eb4c1a5c250a648`;
            console.log(url);

            let {data: {articles}} = await axios.get(url);
            setData(articles);
            setLoading(true); //로딩완료

        })();
        
    }, [query]); //6. 변화가 일어날때 마다 재실행할 변수
    
    // console.log(data);
    //3.데이터 로딩처리 (데이터 오기전에 state는 undefined)
    const [loading, setLoading] = useState(false);

    if(loading === false){
        return <div>로딩중</div>
    }


    //4.li태그 컴포넌트로 변경
    return(
        <div className={styled.news_container}>
            <h3>오늘의 헤드라인</h3>
            <ul className={styled.news_wrap}>
                {
                    /* 1.url, urlToImage, title, author, description, publishedAt */  
                    data.map( (item, index) => <NewsArticle key={index+1} item={item}/> )
                }
            </ul>
        </div>
    )
}
export default NewsList;