import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import axios from "axios";

export function Addgenre() {
    const {register, handleSubmit} = useForm()
    const token = useSelector((state) => state.auth.value)
    const onSubmit = (data) => {

        axios.post("http://localhost:8080/api/genre/add", {genreID: data.tags, animeID: data.anime})

            .then((response) => {
                console.log(response.data)
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="number" {...register('tags')} placeholder="ID тэга"/>
                <br/>
                <input type="number" {...register('anime')} placeholder="Id Аниме"/>
                <br/>

                <input type="submit" placeholder="Создать аниме"/>
            </form>
        </div>
    )
}