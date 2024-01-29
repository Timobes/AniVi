import random from "../../img/random.svg"
import {Link} from "react-router-dom";
// import search from "../../img/search.svg"
export function Header() {
    return (
        <header className="header">
            <Link to="/main">
                <div className="logo">
                    <span className="logo white">Ani</span><span className="logo red">Vi.one</span>
                </div>
            </Link>

            <input type="text" className="search-input" placeholder={'Поиск по сайту...'}/>
            {/*<img src={search} alt="" className="search-btn"/>*/}

            <button className="rand-btn"><img src={random} alt="rand-btn"/></button>

            <div className="profile">
                <p className="username">Name</p>
                <img src="" alt="avatar" className="avatar"/>
            </div>
        </header>
    )
}