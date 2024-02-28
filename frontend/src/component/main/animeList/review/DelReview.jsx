import {delReview} from "../../../ApiServis";

export function DelReview(props) {
    const del = () => {
        let vop = window.confirm("Вы уверены, что хотите удалить отзыв?");

        if(vop) {
            delReview(props.aniid)
                .then((data) => {
                    console.log(data)
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
            <button onClick={del}>Удалить отзыв</button>
        </>
    )
}