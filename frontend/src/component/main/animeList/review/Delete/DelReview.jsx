import {delReview} from "../../../../ApiServis";
import './style.css'

export function DelReview(props) {
    const del = () => {
        let vop = window.confirm("Вы уверены, что хотите удалить отзыв?");

        if(vop) {
            delReview(props.aniid)
                .then((data) => {
                    console.log(data)
                    window.location.reload();
                })

                .catch((err) => {
                    console.log(err)
                })
        } else {
            console.log('Отмена')
        }
    }

    return (
        <>
            <button onClick={del} className="review-delete-btn">Удалить отзыв</button>
        </>
    )
}