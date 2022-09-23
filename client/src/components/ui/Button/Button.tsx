import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import ButtonBase from "../ButtonBase/ButtonBase";
import s from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}


const Button: FC<ButtonProps> = (props) => {
    const {startIcon, endIcon, type, disabled, className, onClick, children} = props;
    return (
        <ButtonBase
            type={type}
            startIcon={startIcon}
            disabled={disabled}
            endIcon={endIcon}
            className={classNames(s.btn, className)}
            onClick={onClick}
        >
            {children}
        </ButtonBase>
    );
};

export default Button;