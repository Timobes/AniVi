import {LoadEp} from "./LoadEp";
import {Addgenre} from "./Addgenre";
import {CreateAnime} from "./CreateAnime";
import {useSelector} from "react-redux";
export function Admin() {
    const token = useSelector((state) => state.auth.value)

    return (
        <div className="admin">
            {
                token.length > 0
                    ?
                        token.map((role) => (
                             role.roles == 9
                                ?
                                 <>
                                     <CreateAnime />
                                     <hr/>
                                     <LoadEp />
                                     <hr/>
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