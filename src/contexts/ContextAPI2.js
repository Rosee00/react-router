import { createContext, useState } from "react";


//1.초기값 설정
const UserContext = createContext({ /* provider, consumer 들어있음 */
    state : {id: 'aaa', name: 'bbb'}, 
    action : { 
        setUser : () => {}
    }
})

//2.Provider정의 - 구조분해할당은 반드시 children으로
const UserProvider = ({children}) => { //부모component를 감싸는 요소

    const [user, setUser] = useState({id: 'aaa', name: 'bbb'});

    const value = {
        state: user,
        action: {setUser} /* {setUser : setUser(함수)} 옆에와 같이 생략가능*/
    }
    // console.log(children);
    // console.log(value);

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )

}

//3.컨슈머, 프로바이더 반환
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer} /* 여러개를 반환할 때, {} 用 */

//4. 기본 export
export default UserContext;