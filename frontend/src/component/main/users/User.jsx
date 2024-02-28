import {useNavigate, useParams} from "react-router-dom";
import {getUser} from "../../ApiServis";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export function User() {
    const {id} = useParams()
    const [data, setData] = useState([])
    const token = useSelector((state) => state.auth.value)
    const nav = useNavigate()

    if (token.length > 0) {
        if (token[0].user_id == id) {
            nav('/profile')
        }
    }

    useEffect(() => {
        getUser(id)
            .then((data) => {
                setData(data)
                console.log(data)
            })

            .catch((err) => {
                console.log(err)
            })

    }, [id]);


    return (
        <div>
            {data.map((user) => (
                <div>
                    <div>ID = {user.user_id}</div>
                    <br/>
                    <div>Email = {user.email}</div>
                    <br/>
                    <div>Username = {user.username}</div>
                </div>
            ))}
        </div>
    )
}