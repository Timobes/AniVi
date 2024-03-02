import {useEffect, useState} from "react";
import {getReview} from "../../../ApiServis";
import {DelReview} from "./Delete/DelReview";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './style.css'

export function Review(props) {
    const [data, setData] = useState([])
    const token = useSelector((state) => state.auth.value)

    console.log(typeof(token))

    useEffect(() => {
        getReview(props.anid)
            .then((data) => {
                setData(data)
                console.log('review data = ',data)
            })

            .catch((err) => {
                console.log(err)
            })

    }, []);


    return (
        <div className='review-main'>
            {
                data.map((rev) => (
                    <div className="b-review">
                        {/*<p>Id = {rev.review_id}</p>*/}
                        <Link to={`/user/${rev.user_id}`} className="review-username">{rev.username}</Link>
                        <p className="review-date">{new Date(rev.dates).toLocaleDateString()}</p>
                        <p className="review-text">{rev.rewiew_text}</p>
                        {
                            token.length > 0
                                ?
                                token.map((user) => (
                                    rev.username === user.username
                                        ?
                                        <DelReview aniid={rev.review_id} />
                                        :
                                        <p></p>
                                ))
                                :
                                <p></p>
                        }
                    </div>
                ))
            }
        </div>
    )
}