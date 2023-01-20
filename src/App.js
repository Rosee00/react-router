import { Route, Routes } from "react-router-dom";
import NewsHome from "./component2/NewsHome";
import Header from "./layout/Header";

const App = () => {
    return(
        <Routes>
            {/* 중첩 */}
            <Route element={<Header/>}>
                <Route path="/" element={<NewsHome/>}/>
                <Route path="/:category" element={<NewsHome/>}/>
            </Route>
        </Routes>
    )
}

export default App; 