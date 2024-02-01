import ReactPlayer from "react-player";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEp, getOneAnime} from "../../ApiServis";

export function AnimePage() {
    const {id} = useParams()
    const [data, setData] = useState([])
    const [ep, setEp] = useState([])

    const [currentEpisode, setCurrentEpisode] = useState(0);

    const handleEpisodeChange = (episodeNumber) => {
        setCurrentEpisode(episodeNumber);
    };

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

    return (
        <>
        {
            data.map((anime) => (
                <div className="animepage">
                    <p className="AP-name">{data.anime_title_eng}</p>
                    <p className="AP-jap-name">{data.anime_title_jap}</p>

                        <ReactPlayer
                            className="Player"
                            width="1280px"
                            height="720px"
                            controls={true}
                            url={`http://localhost:8080/anime/${ep[currentEpisode].anime_episode_name}`}
                        />

                        <div className="AP-series" >
                            {ep.map((episode, index) => (
                                <button className="ep-btn" onClick={() => handleEpisodeChange(index)}>
                                    <p key={index}>
                                        Эпизод {index + 1}
                                    </p>
                                </button>
                            ))}
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


