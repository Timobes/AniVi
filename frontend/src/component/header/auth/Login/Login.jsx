import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "../../../../state/slice/authSlice";
import {auth} from "../../../ApiServis";
import './style.css'
export function Login() {
    const {register, handleSubmit} = useForm()
    const token = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()

    console.log('token = ',token)

    const onSubmit = (data) => {
        auth({email: data.email, passwords: data.passwords})
            .then((data) => {
                console.log(data)
                dispatch(setToken(data))
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="login-name">Вход</p>
                <input type="email" {...register('email')} placeholder="Почта" className="login-input"/>
                <br/>
                <input type="password" {...register('passwords')} placeholder="Пароль" className="login-input"/>
                <br/>

                <input type="submit" className="login-btn" value="Войти"/>
            </form>
        </div>
    )
}