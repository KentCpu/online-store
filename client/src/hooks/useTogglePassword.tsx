import { useState } from 'react';


export const useTogglePassword = () => {
    const [isVisible, setIsVisible] = useState(false);
    const type = isVisible ? "text" : "password";

    const changePassword = () => {
        setIsVisible(isVisible => !isVisible);
    }

    return { isVisible, type, changePassword };
};