import React, {SyntheticEvent, useRef, useState} from 'react'
import useActions from "../../hooks/useActions";
import {IRegistrationData} from "../../types/IRegistrationData";
import useTogglePassword from "../../hooks/useTogglePassword";
import s from "./Auth.module.scss";
import Title from "../ui/Title/Title";
import TextField from "../ui/TextField/TextField";
import {handleChange} from "../../utils/helpers";
import PasswordIcon from "../PasswordIcon/PasswordIcon";
import {Link} from "react-router-dom";
import {HOME_ROUTE, REGISTRATION_ROUTE} from "../../utils/constants/url";
import {ILoginData} from "../../types/ILoginData";
import {IErrorLogin} from "../../types/IErrorLogin";
import {useNavigate} from "react-router-dom";


const LoginForm = () => {
    const {login} = useActions();
    const [error, setError] = useState({} as IErrorLogin);
    const [userData, setUserData] = useState<ILoginData>({
        email: "",
        password: "",
    });
    const {isVisible, type, changePassword} = useTogglePassword();
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await login(userData, setError);
        navigate(HOME_ROUTE);
    }


    return (
        <div className={s["wrapper"]}>
            <div className={s["form-wrapper"]}>
                <div className={s["header"]}>
                    <Title>Sign in</Title>
                </div>

                <form onSubmit={submit}>
                    <div className={s["text-field-wrapper"]}>
                        <TextField
                            label="Email"
                            nameInput="email"
                            style={s["text-field"]}
                            value={userData.email}
                            errorMessage={error?.email}
                            onChange={(e) => handleChange<IRegistrationData>(e, setUserData)}
                        />
                    </div>

                    <div className={s["text-field-wrapper"]}>
                        <TextField
                            ref={inputRef}
                            label="Password"
                            nameInput="password"
                            style={s["text-field"]}
                            value={userData.password}
                            typeInput={type}
                            errorMessage={error?.password}
                            endIcon={<PasswordIcon isVisible={isVisible} changePassword={changePassword}/>}
                            onChange={(e) => handleChange<IRegistrationData>(e, setUserData)}
                        />

                        <div className={s["error-message"]}>{error.incorrectData}</div>
                    </div>

                    <button type="submit" className={s["submit"]}>Sign in</button>
                    <span>Don't have an account yet? <Link to={REGISTRATION_ROUTE}> Create</Link></span>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;