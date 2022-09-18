import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import ButtonBase from "../ButtonBase/ButtonBase";
import s from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}


const Button: FC<ButtonProps> = ({startIcon, endIcon, className, children}) => {
    return (
        <ButtonBase
            startIcon={startIcon}
            endIcon={endIcon}
            className={classNames(s.btn, className)}
        >
            {children}
        </ButtonBase>
    );
};

export default Button;