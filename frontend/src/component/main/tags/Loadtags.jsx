import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getAllTags, getFilterTags} from "../../ApiServis";
import './style.css'
export function Loadtags() {

    const [data, setData] = useState([])
    const [fil, setFil] = useState([])
    let sty = document.getElementById('animeList')


    useEffect(() => {
        getAllTags()
            .then((data) => {
                setData(data)
            })

            .catch((err) => {
                console.log(err)
            })
    }, []);

    const search = (e) => {
        let name = e.target.textContent

        getFilterTags(name)
            .then((data) => {
                console.log(data)
                setFil(data)

                sty.style.display = 'none'

            })

            .catch((err) => {
                console.log(err)
            })
    }

    function resetSeacrch() {
        setFil([])
        sty.style.display = 'flex'
    }

    return (
        <>
            <div className="b-tags">
                {
                    data.map((tags) => (
                        <li>
                            <button onClick={search} className="tags-btn">
                                {tags.name}
                            </button>
                        </li>
                    ))
                }
                <button onClick={resetSeacrch} className="login-btn">Сброс</button>
                <div>Найдено {fil.length} аниме</div>
            </div>
            <ul>
                <div className="animeList2">

                    {
                        fil.map((anime) => (

                            <div>
                                <div>
                                    <Link to={`/anime/${anime.anime_id}`}>
                                        <div className="anime--block">
                                            <img src={anime.poster_url} alt="anime--img" className="anime--img"/>
                                            <p className="anime--name">{anime.anime_title_eng}</p>
                                            <p className="anime--year">{new Date(anime.years).toLocaleDateString()}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </ul>
        </>
    )
}