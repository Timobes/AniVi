import {useDispatch, useSelector} from "react-redux";
import {clearToken} from "../../state/slice/authSlice";

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
                        <div>
                            <div>ID = {token[0].user_id}</div>
                            <br/>
                            <div>Email = {token[0].email}</div>
                            <br/>
                            <div>Username = {token[0].username}</div>
                            <button onClick={exit}>Выйти</button>
                        </div>
                    :
                        <h1>Вы не вошли в аккаунт!</h1>
            }
        </div>
    )
}