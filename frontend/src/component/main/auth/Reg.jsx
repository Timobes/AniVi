import {useState} from "react";
import {reg} from "../../ApiServis";
import {useForm} from "react-hook-form";

export function Reg() {
    const [data, setData] = useState([])
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        reg({email: data.email, passwords: data.passwords, username: data.username})
            .then((data) => {
                setData(data)

            })

            .catch((err) => {
                console.log(err)
            })
    }

    console.log(data)
    return (
        <div className="reg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register('email')} placeholder="Почта" className="login-input"/>
                <br/>
                <input type="password" {...register('passwords')} placeholder="Пароль" className="login-input"/>
                <br/>
                <input type="text" {...register('username')} placeholder="Никнэйм" className="login-input"/>
                <br/>

                <input type="submit" className="login-btn" value="Зарегистрироваться"/>
            </form>
        </div>
    )
}