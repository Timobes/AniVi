import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {clearToken} from "../../state/slice/authSlice";

export function Profile() {
    const [data, setData] = useState([])
    const token = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()

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

    const exit = () => {
        let vop = window.confirm("Вы хотите выйти?");

        if(vop) {
            dispatch(clearToken())
        } else {
            console.log('отмена выхода')
        }
    }

    return (
        <div className="profile">
            {
                data.map((user) => (
                    <div>
                        <div>ID = {user.user_id}</div>
                        <br/>
                        <div>Email = {user.email}</div>
                        <br/>
                        <div>Username = {user.username}</div>
                        <button onClick={exit}>Выйти</button>
                    </div>
                ))
            }
        </div>
    )
}