import { Fragment } from "react"
import ColorContext from "../contexts/ContextAPI";


const ColorComponent = () => {
    return(
        <Fragment>
            <ColorContext.Consumer>
            {/* 
            * 부모 component에서는 provider를 사용하여 value값을 제어해준다.
            사용할 곳: consumer - 함수의 return 구문에 화면을 처리할 내용을 작성함
            */}
            {
                // 함수형태 작성
                (value)=> (
                    <div>
                        ContextAPI의 사용<br/>
                        값: {value.color}
                    </div>
                )
            }
            </ColorContext.Consumer>
        </Fragment>
    )
}

export default ColorComponent;