import ReactPlayer from "react-player";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEp, getOneAnime} from "../../ApiServis";
export function AnimePage() {
    const {id} = useParams()
    const [data, setData] = useState([])
    const [ep, setEp] = useState([])

    useEffect(() => {
        getOneAnime(id)
            .then((data) => {
                setData(data)
            })

            .catch((err) => {
                console.log(err)
            })
    }, [id]);


    useEffect(() => {
        getEp(id)
            .then((data) => {
                setEp(data)
            })

            .catch((err) => {
                console.log(err)
            })
    }, [id]);

    console.log(ep.anime_episode_name)

    return (
        <>
            {
                data.map((anime) => (
                    <div className="animepage">

                    <p className="AP-name">{anime.anime_title_eng}</p>
                    <p className="AP-jap-name">{anime.anime_title_jap}</p>
                        {
                            ep.map((ep) => (
                                <ReactPlayer
                                    className="Player"

                                    width="1280px"
                                    height="720px"
                                    controls={true}

                                    url={`http://localhost:8080/anime/${ep.anime_episode_name}`}
                                />
                            ))
                        }

                        <div className="AP-series">
                            {/*<p className="ep-btn">1 серия</p>*/}
                            {/*<p className="ep-btn">2 серия</p>*/}
                            {/*<p className="ep-btn">3 серия</p>*/}
                            {/*<p className="ep-btn">4 серия</p>*/}
                            {/*<p className="ep-btn">5 серия</p>*/}
                        </div>

                        <div className="AP-desc-all">
                            <img src={anime.poster_url} alt="AP-logo"/>

                            <div className="AP-desc-block">
                                <p className="AP-year">
                                    <span className="red">Г</span>од релиза
                                    <br/>
                                    {new Date(anime.years).toLocaleDateString()}
                                </p>

                                <p className="AP-desc">
                                    <span className="red">О</span>писание
                                    <br/>
                                    {anime.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}