import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

export function LoadEp() {
    const {register, handleSubmit} = useForm()
    const token = useSelector((state) => state.auth.value)
    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('anime', data.anime[0])
        formData.append('anime_episode_number', data.anime_episode_number)
        formData.append('anime_id', data.anime_id)

        console.log(formData)

        axios.post("http://localhost:8080/api/anime/series", formData, {
            headers: {
                "token": token
            },})

            .then((response) => {
                console.log(response.data)
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="loadEp">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" {...register('anime')} placeholder="Файл"/>
                <br/>
                <input type="number" {...register('anime_episode_number')} placeholder="Номер эпизода"/>
                <br/>
                <input type="number" {...register('anime_id')} placeholder="Id Аниме"/>
                <br/>

                <input type="submit" placeholder="Создать аниме"/>
            </form>
        </div>
    )
}