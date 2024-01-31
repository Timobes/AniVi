import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {allAnime} from "../../ApiServis";

export function AnimeList() {
    const [data, setData] = useState([])

    useEffect(() => {
        allAnime()
            .then((data) => {
                setData(data)
            })

            .catch((err) => {
                console.log(err)
            })
    }, []);

    console.log(data)

    return (
        <div className="animeList">
            {
                data.map((anime) => (
                    <Link to={`/anime/${anime.anime_id}`}>
                        <div className="anime--block">
                            <img src={anime.poster_url} alt="anime--img" className="anime--img"/>
                            <p className="anime--name">{anime.anime_title_eng}</p>
                            <p className="anime--year"> {new Date(anime.years).toLocaleDateString()}</p>
                            {/*<p className="anime--genres">Сенэн</p>*/}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}