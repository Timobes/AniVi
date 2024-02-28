import {useEffect, useState} from "react";
import {getReview} from "../../../ApiServis";
import {DelReview} from "./DelReview";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

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
        <div>
            {
                data.map((rev) => (
                    <div className="b-review">
                        {/*<p>Id = {rev.review_id}</p>*/}
                        <Link to={`/user/${rev.user_id}`}>User = {rev.username}</Link>
                        <p>Text = {rev.rewiew_text}</p>
                        <p>Date = {new Date(rev.dates).toLocaleDateString()}</p>
                        {
                            token.length > 0
                                ?
                                    token.map((user) => (
                                        rev.username == user.username
                                            ?
                                                <DelReview aniid={rev.review_id}/>
                                            :
                                                <p></p>
                                    ))
                                :
                                    <p></p>
                        }
                        <hr/>
                    </div>
                ))
            }
        </div>
    )
}