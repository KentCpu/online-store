import React from 'react';
import {faEye} from "@fortawesome/free-solid-svg-icons/faEye";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import s from "./PasswordIcon.module.scss";

const PasswordIcon = ({isVisible, changePassword}: { isVisible: boolean, changePassword: () => void }) => {
    return (
        <div onClick={changePassword} className={s["wrapper"]}>
            {
                isVisible ?
                    <FontAwesomeIcon className={s["icon"]}  icon={faEye}/>
                    :
                    <FontAwesomeIcon className={s["icon"]}  icon={faEyeSlash}/>
            }
        </div>
    );
};

export default PasswordIcon;