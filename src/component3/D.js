import { useContext, useRef } from "react";
import UserContext from "../contexts/ContextAPI2";

const D = () => {

     //초기값을 구조분해 할당
     const {state, action} = useContext(UserContext);
     // console.log(result); //캡쳐에서는 result 확인
     
     //useRef
     const input1 = useRef(null);
     const input2 = useRef(null);
     const handleClick = () => {
         // console.log(input1.current.value); //사용자의 입력값
         // console.log(input2.current.value);
 
         //contextAPI의 action의 사용
         action.setUser({id:input1.current.value,
                         name: input2.current.value});
     }


    return(
        <>
            <h3>D컴포넌트</h3>
            context 안의 값: {state.id}<br/>
            context 안의 값: {state.name}<br/>

            <div>
                <input type="text" ref={input1}/><br/>
                <input type="text" ref={input2}/><br/>
                <button onClick={handleClick}>컨텍스트 데이터변경</button>
            </div>

        </>

    )
}
export default D;