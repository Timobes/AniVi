import ReactPlayer from "react-player";
import animeIMG from "../../../img/aniBack.png"
import {useParams} from "react-router-dom";
export function AnimePage() {
    const {id} = useParams()

    return (
        <div className="animepage">
            <p className="AP-name">Name</p>
            <p className="AP-jap-name">Jap Name</p>
            <ReactPlayer
                className="Player"

                width="1280px"
                height="720px"

                url="http://localhost:8080/anime/test-name/3.mp4"
                controls={true}
            />

            <div className="AP-series">
                <p className="ep-btn">1 серия</p>
                <p className="ep-btn">2 серия</p>
                <p className="ep-btn">3 серия</p>
                <p className="ep-btn">4 серия</p>
                <p className="ep-btn">5 серия</p>

                <p className="ep-btn">6 серия</p>
                <p className="ep-btn">7 серия</p>
                <p className="ep-btn">8 серия</p>
                <p className="ep-btn">9 серия</p>
                <p className="ep-btn">10 серия</p>

                <p className="ep-btn">11 серия</p>
                <p className="ep-btn">12 серия</p>
            </div>

            <div className="AP-desc-all">
                <img src={animeIMG} alt="AP-logo"/>

                <div className="AP-desc-block">
                    <p className="AP-year">
                        <span className="red">Г</span>од релиза
                        <br/>
                        2020
                    </p>

                    <p className="AP-genres">
                        <span className="red">Ж</span>анры
                        <br/>
                        Экшен, Комедия
                    </p>

                    <p className="AP-desc">
                        <span className="red">О</span>писание
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam commodi, expedita
                        iure nesciunt nisi nobis? Architecto, deleniti est ipsam non obcaecati quae, quaerat quidem,
                        sint soluta veritatis vitae voluptatibus.</p>
                </div>
            </div>

        </div>
    )
}