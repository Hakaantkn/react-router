
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App.jsx"
import {Home} from "./Home"
import {Posts} from "./Posts"
import {NotFound} from "./NotFound"
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/app' Component={App}></Route>
                <Route path='/home' Component={Home}></Route>
                <Route path="/posts" element={<Posts/>}></Route>
                <Route path="*" Component={NotFound}></Route>
            </Routes>
        </BrowserRouter>

    )
}