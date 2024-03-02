import {Link} from "react-router-dom";
import random from "frontend/src/img/random.svg";
import {useEffect, useState} from "react";
import axios from "axios";
import './style.css'

export function RandBtn() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/anime/`)
            .then((response) => {
                setData(response.data);
            })

            .catch((err) => {
                console.log(err);
            });
    }, []);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    return (
        <>
            {
                data.map((anime) => (
                    <Link key={anime.anime_id} to={`/anime/${getRandomInt(anime.anime_id) }`}>
                        <img src={random} alt="rand-btn"/>
                    </Link>
                ))
            }
        </>
    )
}