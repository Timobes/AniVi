import {LoadEp} from "./Anime/Ep/LoadEp";
import {Addgenre} from "./Genre/Add/Addgenre";
import {CreateAnime} from "./Anime/Create/CreateAnime";
import {useSelector} from "react-redux";
import './style.css'
export function Admin() {
    const token = useSelector((state) => state.auth.value)

    return (
        <div className="admin">
            {
                token.length > 0
                    ?
                        token.map((role) => (
                             role.roles === 9
                                ?
                                 <>
                                     <CreateAnime />
                                     <LoadEp />
                                     <Addgenre />
                                 </>

                                :
                                    <h1>У вас недостаточно прав!</h1>

                        ))
                    :
                        <h1>Войдите в аккаунт!</h1>
            }

        </div>
    )
}