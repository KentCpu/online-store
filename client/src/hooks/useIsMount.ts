import {Ref, useEffect, useRef} from 'react';

const useIsMount = ():boolean => {
    const isDidMount = useRef(false);

    useEffect(() => {
        isDidMount.current = true;
    }, []);

    return isDidMount.current;
};

export default useIsMount;