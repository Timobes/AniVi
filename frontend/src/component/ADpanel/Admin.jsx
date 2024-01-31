import {useForm} from "react-hook-form";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {clearToken} from "../../state/slice/authSlice";
export function Admin() {
    const {register, handleSubmit} = useForm()
    const token = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        axios.post("http://localhost:8080/api/anime", {anime_title_rus: data.anime_title_rus, anime_title_eng: data.anime_title_eng, anime_title_jap: data.anime_title_jap, description: data.description, years: data.years, poster_url: data.poster_url}, {headers: {"token": token}})

            .then((response) => {
                console.log(response.data)
                dispatch(clearToken())
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="admin">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('anime_title_rus')} placeholder="Название на Рус"/>
                <br/>
                <input type="text" {...register('anime_title_eng')} placeholder="Название на Япо"/>
                <br/>
                <input type="text" {...register('anime_title_jap')} placeholder="Название на англ"/>
                <br/>
                <input type="text" {...register('description')} placeholder="Описание"/>
                <br/>
                <input type="date" {...register('years')} placeholder="Год выхода"/>
                <br/>
                <input type="text" {...register('poster_url')} placeholder="Ссылка на постер"/>
                <br/>

                <input type="submit" placeholder="Создать аниме"/>
            </form>
        </div>
    )
}