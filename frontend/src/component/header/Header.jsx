import random from "../../img/random.svg"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {clearToken} from "../../state/slice/authSlice";
import {Search} from "./Search";
import Popup from "reactjs-popup";
import {Login} from "../main/auth/Login";
import {Reg} from "../main/auth/Reg";
export function Header() {
    const [data, setData] = useState([])
    const token = useSelector((state) => state.auth.value)

    const dispatch = useDispatch()
    // dispatch(clearToken())

    useEffect(() => {
        axios.get("http://localhost:8080/api/auth/profile", {headers: {"token": token}})
            .then((response) => {
                setData(response.data)
                console.log(data)
            })

            .catch((err) => {
                console.log(err)
            })
    }, [token]);

    return (
        <header className="header">
            <Link to="/main">
                <div className="logo">
                    <span className="logo white">Ani</span><span className="logo red">Vi.one</span>
                </div>
            </Link>

            <input type="text" className="search-input" placeholder={'Поиск по сайту...'}/>
            {/*<img src={search} alt="" className="search-btn"/>*/}
            {/*<Search />*/}

            <button className="rand-btn"><img src={random} alt="rand-btn"/></button>
            {
                token
                    ?   <div className="profile">
                            <Link to="/profile">
                                {data.map((user) => (
                                    <>
                                        <p className="username">{user.username}</p>
                                        {
                                            user.roles == 9
                                                ? <Link to="/admin">Admin panel</Link>

                                                : <></>

                                        }
                                    </>
                                ))}
                            </Link>
                        </div>
                    :
                        <div>
                                <Popup trigger={<button className="header-login-btn"> Войти</button>} modal position="center">
                                    <Login />
                                </Popup>
                            <hr/>
                                <Popup trigger={<button className="header-login-btn">Зарегаться</button>} modal position="center">
                                    <Reg />
                                </Popup>
                        </div>
            }
        </header>
    )
}