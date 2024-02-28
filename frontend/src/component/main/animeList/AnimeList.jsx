import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {allAnime} from "../../ApiServis";
import {Loadtags} from "../tags/Loadtags";

export function AnimeList() {
    const [data, setData] = useState([])
    const [visibleItems, setVisibleItems] = useState(5); // Начальное количество видимых элементов
    const handleShowMoreClick = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 5); // Увеличиваем количество видимых элементов на 3
    };

    useEffect(() => {
        allAnime()
            .then((data) => {
                setData(data)
            })

            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <>
            <Loadtags />
            <div className="animeList">
                {
                    data.slice(0, visibleItems).map((anime) => (
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
                {visibleItems < data.length && (
                    <div className="b-more">
                        <button onClick={handleShowMoreClick} className="login-btn">Показать больше</button>
                    </div>
                )}
            </div>
        </>
    )
}