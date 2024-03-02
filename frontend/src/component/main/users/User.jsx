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
        <div className="profile">
            {
                data.length > 0
                    ?
                        data.map((user) => (
                                <div className="b-profile">
                                    <div className="profile-name">{user.username}</div>
                                </div>
                        ))
                    :
                        <h1>Профиль удалён, либо не существует</h1>
            }

        </div>
    )
}