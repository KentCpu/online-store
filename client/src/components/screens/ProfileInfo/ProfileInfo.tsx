import classNames from "classnames";
import { FormEvent, useEffect, useState } from 'react';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import UserService from "../../../services/UserService";
import { handleChange } from "../../../utils/helpers";
import Button from "../../ui/Button/Button";
import TextField from "../../ui/TextField/TextField";
import ChangeAvatar from "./ChangeAvatar";
import s from "./ProfileInfo.module.scss";


export interface IUserPersonalData {
    name?: string,
    surname?: string,
    patronymic?: string,
    dateBirth?: Date | string,
}

export const ProfileInfo = () => {
    const { email, nickname, id } = useTypedSelector(state => state.user.userData!);
    const [userData, setUserData] = useState<IUserPersonalData>({
        name: "",
        surname: "",
        patronymic: "",
        dateBirth: "",
    });


    useEffect(() => {
        if (id) {
            UserService.getDataUser(id)
                .then(user => setUserData(prevData => ({ ...prevData, ...user.data })))
                .catch(error => console.error(error))
        }
    }, []);


    const submit = async (e: FormEvent) => {
        e.preventDefault();
        await UserService.saveUserData(id, userData);
    }


    return (
        <div className={classNames("container", s["profile-container"])}>
            <form onSubmit={submit} className={s["profile-form"]}>
                <div className={s["profile-info"]}>
                    <TextField
                        name="surname"
                        label={"Surname"}
                        className={s["input"]}
                        value={userData?.surname}
                        onChange={(e) => handleChange<IUserPersonalData>(e, setUserData)}
                    />
                    <TextField
                        name="name"
                        label={"Name"}
                        className={s["input"]}
                        value={userData?.name}
                        onChange={(e) => handleChange<IUserPersonalData>(e, setUserData)}
                    />
                    <TextField
                        name="patronymic"
                        label={"Patronymic"}
                        value={userData?.patronymic}
                        className={s["input"]}
                        onChange={(e) => handleChange<IUserPersonalData>(e, setUserData)}
                    />
                    <TextField
                        label={"Date of birth"}
                        type={"date"}
                        className={s["input"]}
                        value={userData?.dateBirth && new Date(userData.dateBirth).toISOString().slice(0, 10)}
                        onChange={(e) => setUserData(prevData => ({ ...prevData, dateBirth: new Date(e.target.value) }))}
                    />
                    <TextField
                        label={"Email"}
                        className={s["input"]}
                        value={email}
                        disabled={true}
                    />
                    <TextField
                        label={"Nickname"}
                        className={s["input"]}
                        value={nickname}
                        disabled={true}
                    />
                    <Button type='submit' className={s["save-btn"]}>Upload information</Button>
                </div>
                <ChangeAvatar />
            </form>
        </div>
    );
};