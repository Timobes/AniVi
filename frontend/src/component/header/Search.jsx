import {useState} from "react";
import axios from "axios";
export function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [data, setData] = useState([])

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        const query = event.target.value;

        axios.get(`http://localhost:8080/api/anime/search?query=${query}`)
            .then((response) => {
                setData(response.data)
            })

            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <div>
            <input type="text" value={searchQuery} onChange={handleSearchChange} />
            <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
}