import { ChangeEvent } from "react";

export const handleChange = <T>(event: ChangeEvent<HTMLInputElement>, setData: Function) => {
    setData((data: T) => {
        return { ...data, [event.target.name]: event.target.value };
    });
}

export const getCurrentYear = () => {
    return new Date().getFullYear();
}