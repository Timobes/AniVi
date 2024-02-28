import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getAllTags, getFilterTags} from "../../ApiServis";
export function Loadtags() {

    const [data, setData] = useState([])
    const [fil, setFil] = useState([])

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
            })

            .catch((err) => {
                console.log(err)
            })
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
            </div>
            <ul>
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
        </>
    )
}