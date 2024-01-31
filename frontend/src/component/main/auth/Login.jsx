import axios from 'axios'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "../../../state/slice/authSlice";

export function Login() {
    const {register, handleSubmit} = useForm()
    const token = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()

    console.log('token = ',token)

    const onSubmit = (data) => {
        axios.post("http://localhost:8080/api/auth/log", {email: data.email, passwords: data.passwords}, {headers: {"token": token}})
            .then((response) => {
                console.log(response.data)
                dispatch(setToken(response.data))
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register('email')} placeholder="Почта"/>
                <br/>
                <input type="password" {...register('passwords')} placeholder="Пароль"/>
                <br/>

                <input type="submit" placeholder="Зарегистрироваться"/>
            </form>
        </div>
    )
}