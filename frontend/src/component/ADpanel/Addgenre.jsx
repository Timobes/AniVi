import {useForm} from "react-hook-form";
// import {useSelector} from "react-redux";
import {createGenre} from "../ApiServis";

export function Addgenre() {
    const {register, handleSubmit} = useForm()
    // const token = useSelector((state) => state.auth.value)
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