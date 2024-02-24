import {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([])
    const handleSearchChange = (e) => {
        if (e.target.value === '') {
            setData([])
        }

        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        if (searchQuery) {
            axios.get(`http://localhost:8080/api/anime/search/${searchQuery}`)
                .then((response) => {
                    setData(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [searchQuery]);

    console.log(data)

    return (
        <div>
            <input
                type="text"
                className="search-input"
                placeholder={'Поиск по сайту...'}
                value={searchQuery}
                onChange={handleSearchChange}
            />

            <div className="b-search-res">
                {
                    data.map((anime) => (
                        <Link to={`/anime/${anime.anime_id}`}>
                            <li key={anime.id} className="search-res">{anime.anime_title_eng} / {anime.anime_title_rus}</li>
                        </Link>
                    ))
                }
            </div>

        </div>
    );
}