import { Fragment, useEffect, useState } from "react"


const App = ()=> {

    /* 
    Ajax를 이용해서 외부데이터 가져오기
    1. Promise = fetch()

    //데이터 가져올때 컴포넌트 안에서 바로 가져오면 안됨...
    //클릭하기 전까지는 데이터가 비어있다
    */

    //클릭해서 데이터가져오기
    const [raw, setRaw] = useState();
    const handleClick = () => {
    fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
    .then( response=> response.json() )//json으로 형변환
    .then( data => setRaw(data) ) //fetch와 then으로 바로 state를 변경하면 무한루프에 빠짐, 때문에 이벤트 안에 넣어줘야함
    }  
    
    //화면이 mount이루 데이터가져오기 - useEffect()
    const [data, setData] = useState();

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        .then(response => response.json()) //데이터를 처리할 수 있는 객체로 주기 때문에 json으로 변경이 필요함
        .then(data => setData(data))
    }, [])
 

    return(
        <Fragment>
            <button onClick={handleClick}>데이터가져오기</button>

            { //삼항연산자: raw가 undefined라면
                raw === undefined?
                <div>
                    "데이터준비중"
                </div>
                : 
                <div>
                    아이디:{raw.userId} <br/>
                    PW: {raw.userPw}<br/>
                    이름: {raw.userName} <br/>
                </div>
            }

            <hr/>
            <h3>mount이후 데이터 가져오기</h3>
            {
                data && <div>
                    아이디: {data.userId}
                    PW: {data.userPw}
                    이름: {data.userName}
                </div>
            }
            
           

        </Fragment>
    )
}
export default App;