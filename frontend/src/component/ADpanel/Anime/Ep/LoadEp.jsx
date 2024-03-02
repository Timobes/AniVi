import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {createEp} from "../../../ApiServis";
import './style.css'

export function LoadEp() {
    const {register, handleSubmit} = useForm()
    const token = useSelector((state) => state.auth.value)
    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('anime', data.anime[0])
        formData.append('anime_episode_number', data.anime_episode_number)
        formData.append('anime_id', data.anime_id)

        console.log(formData)

        createEp(formData, {headers: {"token": token[0].passwords, 'Content-Type': 'multipart/form-data'}})
            .then((data) => {
                console.log(data)
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="admin-elem">
            <h1>Добавление эпизода</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="create-anime-inp" type="file" {...register('anime')} placeholder="Файл"/>
                <br/>
                <input className="create-anime-inp" type="number" {...register('anime_episode_number')}
                       placeholder="Номер эпизода"/>
                <br/>
                <input className="create-anime-inp" type="number" {...register('anime_id')} placeholder="Id Аниме"/>
                <br/>

                <input className="create-anime-inp" type="submit" value="Добавить эпизод"/>
            </form>
        </div>
    )
}