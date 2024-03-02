import {AnimeList} from "./animeList/AnimeList";
import {Loadtags} from "./tags/Loadtags";

export function Main() {
    return (
        <main>
            <Loadtags />
            <AnimeList />
        </main>
    )
}