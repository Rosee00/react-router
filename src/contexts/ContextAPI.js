import { createContext } from "react";

//컨텍스트의 기본상태 지정
const ColorContext = createContext({color:'red'})

export default ColorContext; /* Provider, Consumer형태로 내보냄  */