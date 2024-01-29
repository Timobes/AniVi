import {Header} from "../header/Header";
// import {AnimeList} from "./animeList/AnimeList";
import {AnimePage} from "./animeList/AnimePage";

export function Main() {
    return (
        <main>
            <Header />
            {/*<AnimeList />*/}
            <AnimePage />
        </main>
    )
}