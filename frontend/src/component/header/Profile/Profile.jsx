import {useDispatch, useSelector} from "react-redux";
import {clearToken} from "../../../state/slice/authSlice";
import './style.css'

export function Profile() {
    const token = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()
    // dispatch(clearToken())
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
                token
                    ?
                        <div className="b-profile">
                            <div className="profile-name">{token[0].username}</div>
                            <button onClick={exit} className="exit-btn">Выйти</button>
                        </div>
                    :
                        <h1>Вы не вошли в аккаунт!</h1>
            }
        </div>
    )
}