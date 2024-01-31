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
                <input type="email" {...register('email')} placeholder="Почта"/>
                <br/>
                <input type="password" {...register('passwords')} placeholder="Пароль"/>
                <br/>
                <input type="text" {...register('username')} placeholder="Никнэйм"/>
                <br/>

                <input type="submit" placeholder="Зарегистрироваться"/>
            </form>
        </div>
    )
}