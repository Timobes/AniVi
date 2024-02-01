import ReactPlayer from "react-player";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEp, getOneAnime} from "../../ApiServis";
import axios from "axios";

export function AnimePage() {
    const {id} = useParams()

    const [data, setData] = useState([])
    const [ep, setEp] = useState([])
    const [genre, setGenre] = useState([])

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
    }, [id])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/genre/anime/${id}`)
            .then((response) => {
                setGenre(response.data)
            })

            .catch((err) => {
                console.log(err)
            })
    }, [id]);


    console.log('ep = ', ep)
    console.log('current = ', currentEpisode)
    console.log('genre = ', genre)

    return (
        <>
            {
                data.map((anime) => (
                    <div className="animepage">
                        <p className="AP-name">{data.anime_title_eng}</p>
                        <p className="AP-jap-name">{data.anime_title_jap}</p>
                        {
                            ep.length > 0
                                ?
                                    <>
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
                                    </>
                                :
                                    <h1>Ещё нет эпизодов!</h1>
                        }
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

                                <p className="AP-desc">
                                    <span className="red">Ж</span>анры
                                    <br/>
                                    {
                                        genre.map((gen) => (
                                            <div>{gen.name}</div>
                                        ))
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}


