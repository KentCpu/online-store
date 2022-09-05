import React, {ChangeEvent, forwardRef, InputHTMLAttributes, useEffect, useRef} from 'react';
import classNames from 'classnames';
import s from "./TextField.module.scss";
import useIsMount from "../../../hooks/useIsMount";


export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    typeInput?: string;
    nameInput?: string;
    errorMessage?: string;
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    style?: object;
    endIcon?: React.ReactNode;
}


const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const {label, nameInput, typeInput = "text", value, errorMessage, onChange, style, endIcon} = props;
    const isMount = useIsMount();
    const internalRef = useRef<HTMLInputElement>(null);
    React.useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(ref, () => internalRef.current);

    useEffect(() => {
        if(isMount) {
            internalRef?.current?.focus();
        }
    }, [typeInput]);


    return (
        <label htmlFor={nameInput}>
            {label && <span className={s.caption}>{label}</span>}
            <div className={s["input-wrapper"]}>
                <input
                    ref={internalRef}
                    className={classNames(s.input, style)}
                    type={typeInput}
                    name={nameInput}
                    value={value}
                    onChange={onChange}
                />
                {endIcon}
            </div>

            {errorMessage && <p className={s.errorMessage}>{errorMessage}</p>}
        </label>
    );
})

export default TextField;