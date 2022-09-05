import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';


export const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    // const isAuth = useTypedSelector((state: RootState) => state?.user);

    // if (isAuth?.authorized) {
    //     console.log(isAuth)
    //     return (
    //         <div>
    //             <h1>Авторизован</h1>
    //             <button onClick={() => logout()}>Logout</button>
    //         </div>

    //     )
    // }



    return (
        <div>
            Логин
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                />

            </form>
        </div>
    )
}

export default Login;
