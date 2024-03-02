import {useForm} from "react-hook-form";
import {createReview} from "../../../../ApiServis";
import {useSelector} from "react-redux";
import './style.css'

export function CreateReview(props) {
    const token = useSelector((state) => state.auth.value)
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        const date = new Date().toLocaleDateString().replaceAll('.','-')
        console.log('date = ',date)
        createReview({userid: token[0].user_id, text: data.text, dates: date}, props.anid)
            .then((data) => {
                console.log(data)
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="rewiew">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Написание рецензии</h2>
                <p>Текст:</p>
                <textarea
                    {...register('text')}
                    className="rewiew-input"/>
                <br/>
                <input
                    type="submit"
                    className="rewiew-btn"
                    value="Оставить рецензию "/>
            </form>
        </div>
    )
}