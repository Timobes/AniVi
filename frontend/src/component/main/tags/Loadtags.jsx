import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
export function Loadtags() {

    const [data, setData] = useState([])
    const [fil, setFil] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/api/genre")
            .then((response) => {
                setData(response.data)
            })

            .catch((err) => {
                console.log(err)
            })
    }, []);

    const search = (e) => {
        let name = e.target.textContent

        axios.get(`http://localhost:8080/api/filter/tags/${name}`)
            .then((response) => {
                console.log(response.data)
                setFil(response.data)
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <ul>
            {
                data.map((tags) => (
                    <li>
                        <button onClick={search}>
                            {tags.name}
                        </button>
                    </li>
                ))
            }
            <div className="animeList">
                {
                    fil.map((anime) => (
                        <div>
                            <div>
                                <Link to={`/anime/${anime.anime_id}`}>
                                    <div className="anime--block">
                                        <img src={anime.poster_url} alt="anime--img" className="anime--img"/>
                                        <p className="anime--name">{anime.anime_title_eng}</p>
                                        <p className="anime--year"> {new Date(anime.years).toLocaleDateString()}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </ul>
    )
}