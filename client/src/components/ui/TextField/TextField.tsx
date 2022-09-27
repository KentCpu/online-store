import React, {ChangeEvent, forwardRef, InputHTMLAttributes, useEffect, useRef} from 'react';
import classNames from 'classnames';
import s from "./TextField.module.scss";
import useIsMount from "../../../hooks/useIsMount";


export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    endIcon?: React.ReactNode;
}


const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const {label, placeholder, name, type = "text", value, errorMessage, onChange, className, endIcon} = props;
    const isMount = useIsMount();
    const internalRef = useRef<HTMLInputElement>(null);
    React.useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(ref, () => internalRef.current);

    useEffect(() => {
        if(isMount) {
            internalRef?.current?.focus();
        }
    }, [type]);


    return (
        <label className={s.label} htmlFor={name}>
            {label && <span className={s.caption}>{label}</span>}
            <div className={s["input-wrapper"]}>
                <input
                    ref={internalRef}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={classNames(s.input, className)}
                />
                {endIcon}
            </div>

            {errorMessage && <p className={s.errorMessage}>{errorMessage}</p>}
        </label>
    );
})

export default TextField;