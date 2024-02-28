import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./component/header/Header";
import {Main} from "./component/main/Main";
import {AnimePage} from "./component/main/animeList/AnimePage";
import {Footer} from "./component/footer/Footer";
import {Profile} from "./component/header/Profile";
import {Reg} from "./component/main/auth/Reg";
import {Login} from "./component/main/auth/Login";
import {Admin} from "./component/ADpanel/Admin";
import {User} from "./component/main/users/User";
export function Routing() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />

                <Route path="/anime/:id" element={<AnimePage />} />
                <Route path="/profile" element={<Profile />} />

                <Route path="/user/:id" element={<User />} />


                <Route path="/reg" element={<Reg />} />
                <Route path="/login" element={<Login />} />

                <Route path="/admin" element={<Admin />} />

                <Route path="*" element={<h1>Error!</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}