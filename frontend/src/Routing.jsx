import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./component/header/Header";
import {Main} from "./component/main/Main";
import {AnimePage} from "./component/main/animeList/AnimePage";
import {Footer} from "./component/footer/Footer";
import {Profile} from "./component/header/Profile";
export function Routing() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/anime/:id" element={<AnimePage />} />
                <Route path="/profile/:id" element={<Profile />} />


                <Route path="*" element={<h1>Error!</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}