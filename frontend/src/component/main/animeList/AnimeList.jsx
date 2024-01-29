import aniback from "../../../img/aniBack.png"
import {Link} from "react-router-dom";

export function AnimeList() {


    return (
        <div className="animeList">
            <Link to="/anime/1">
                <div className="anime--block">
                    <img src={aniback} alt="anime--img" className="anime--img"/>
                    <p className="anime--name">Name</p>
                    <p className="anime--year">2022</p>
                    <p className="anime--genres">Сенэн</p>
                </div>
            </Link>

            <div className="anime--block">
                <img src={aniback} alt="anime--img" className="anime--img"/>
                <p className="anime--name">Name</p>
                <p className="anime--year">2022</p>
                <p className="anime--genres">Сенэн</p>
            </div>

            <div className="anime--block">
                <img src={aniback} alt="anime--img" className="anime--img"/>
                <p className="anime--name">Name</p>
                <p className="anime--year">2022</p>
                <p className="anime--genres">Сенэн</p>
            </div>

            <div className="anime--block">
                <img src={aniback} alt="anime--img" className="anime--img"/>
                <p className="anime--name">Name</p>
                <p className="anime--year">2022</p>
                <p className="anime--genres">Сенэн</p>
            </div>

            <div className="anime--block">
                <img src={aniback} alt="anime--img" className="anime--img"/>
                <p className="anime--name">Name</p>
                <p className="anime--year">2022</p>
                <p className="anime--genres">Сенэн</p>
            </div>

            <div className="anime--block">
                <img src={aniback} alt="anime--img" className="anime--img"/>
                <p className="anime--name">Name</p>
                <p className="anime--year">2022</p>
                <p className="anime--genres">Сенэн</p>
            </div>

            <div className="anime--block">
                <img src={aniback} alt="anime--img" className="anime--img"/>
                <p className="anime--name">Name</p>
                <p className="anime--year">2022</p>
                <p className="anime--genres">Сенэн</p>
            </div>

            <div className="anime--block">
                <img src={aniback} alt="anime--img" className="anime--img"/>
                <p className="anime--name">Name</p>
                <p className="anime--year">2022</p>
                <p className="anime--genres">Сенэн</p>
            </div>
        </div>
    )
}