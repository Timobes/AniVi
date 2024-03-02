import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {createAnime} from "../../../ApiServis";
import './style.css'

export function CreateAnime() {
    const {register, handleSubmit} = useForm()
    const token = useSelector((state) => state.auth.value)
    const onSubmit = (data) => {
        createAnime({anime_title_rus: data.anime_title_rus, anime_title_eng: data.anime_title_eng, anime_title_jap: data.anime_title_jap, description: data.description, years: data.years, poster_url: data.poster_url}, {headers: {"token": token[0].passwords}})
            .then((data) => {
                console.log(data)
                console.log(token)
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="admin-elem">
            <h1>Добавление аниме</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="create-anime-inp" type="text" {...register('anime_title_rus')}
                       placeholder="Название на Рус"/>
                <br/>
                <input className="create-anime-inp" type="text" {...register('anime_title_eng')}
                       placeholder="Название на Япо"/>
                <br/>
                <input className="create-anime-inp" type="text" {...register('anime_title_jap')}
                       placeholder="Название на англ"/>
                <br/>
                <input className="create-anime-inp" type="text" {...register('description')} placeholder="Описание"/>
                <br/>
                <input className="create-anime-inp" type="date" {...register('years')} placeholder="Год выхода"/>
                <br/>
                <input className="create-anime-inp" type="text" {...register('poster_url')}
                       placeholder="Ссылка на постер"/>
                <br/>

                <input className="create-anime-inp" type="submit" placeholder="Создать аниме"/>
            </form>
        </div>
    )
}