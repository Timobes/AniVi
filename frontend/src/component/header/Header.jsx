import random from "../../img/random.svg"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {clearToken} from "../../state/slice/authSlice";
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

            <button className="rand-btn"><img src={random} alt="rand-btn"/></button>
            {
                token
                    ?   <div className="profile">
                            <Link to="/profile">
                                {data.map((user) => (
                                    <p className="username">{user.username}</p>
                                ))}
                            </Link>
                        </div>
                    :
                        <div>
                            Вы не авторизированны!
                            <br/>
                            <Link to="/login">Войти</Link>
                            <br/>
                            <Link to="/reg">Зарегаться</Link>
                        </div>
            }
        </header>
    )
}