import ReactPlayer from "react-player";
import {useParams} from "react-router-dom";
import {createContext, useEffect, useState} from "react";
import Popup from "reactjs-popup";
import {getEp, getGenre, getOneAnime} from "../../../ApiServis";
import {Review} from "../review/Review";
import {CreateReview} from "../review/Create/CreateReview";
import {useSelector} from "react-redux";
import './style.css'

const CommentContext = createContext(false)

export function AnimePage() {
    const {id} = useParams()

    const token = useSelector((state) => state.auth.value)

    const [data, setData] = useState([])
    const [ep, setEp] = useState([])
    const [genre, setGenre] = useState([])

    const [currentEpisode, setCurrentEpisode] = useState(0);

    const [isNewComment, setIsNewComment] = useState(false)

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
        getGenre(id)
            .then((data) => {
                setGenre(data)
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
                        <p className="AP-name">{anime.anime_title_eng}</p>
                        <p className="AP-jap-name">{anime.anime_title_jap}</p>
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
                            <div>
                                <img src={anime.poster_url} alt="AP-logo"/>
                            </div>

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

                        <br/>
                            {
                                token.length > 0
                                    ?
                                    <Popup trigger={<button className="header-login-btn">Оставить отзыв</button>} modal position="center">
                                        <CreateReview anid={id}/>
                                    </Popup>
                                    :
                                    <h1>Войдите, чтобы оставить отзыв!</h1>

                            }
                            <br/>
                        <Review anid={id}/>
                    </div>
                ))
            }
        </>
    )
}


