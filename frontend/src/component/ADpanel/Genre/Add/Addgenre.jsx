import {useForm} from "react-hook-form";
import {createGenre} from "../../../ApiServis";
import './style.css'

export function Addgenre() {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        createGenre( {genreID: data.tags, animeID: data.anime})
            .then((data) => {
                console.log(data)
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="admin-elem">
            <h1>Добавление жанров</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="create-anime-inp" type="number" {...register('tags')} placeholder="ID тега"/>
                <br/>
                <input className="create-anime-inp" type="number" {...register('anime')} placeholder="Id Аниме"/>
                <br/>
                <input className="create-anime-inp" type="submit" value="Добавить тег"/>
            </form>
        </div>
    )
}