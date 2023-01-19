import { useParams } from "react-router-dom";


const Info = () => {
    
    const data = {
        1: {name: "홍길동", subject: "리액트라우터"},
        2: {name: "이순신", subject: "리액트props"},
        3: {name: "coding404", subject: "리액트state"}
    }
 
    //useParams()
    let param = useParams();
    // console.log(params); //URL주소에 값을 키로 받아줍니다.
    // console.log(params.num); //URL주소에 실린 값    

    const {name, subject} = data[param.num]
   

    return(
        <div>
            <h3>info화면...</h3>
            {name}님의 데이터{subject}
        </div>
    )
}
export default Info;