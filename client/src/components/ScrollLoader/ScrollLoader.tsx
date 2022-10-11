import { FC, useRef, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import useScroll from "../../hooks/useScroll";

interface DownloadScrollProps {
    downloadData: any,
}

const ScrollLoader: FC<DownloadScrollProps> = ({ downloadData }) => {
    const lastElementVisible = useRef<HTMLDivElement | null>(null);
    const [isLoader, setIsLoader] = useState(false);
    useScroll(downloadDataWrapper, lastElementVisible);

    async function downloadDataWrapper() {
        setIsLoader(true);
        try {
            await downloadData();
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoader(false);
        }
    }


    return (
        <div>
            {
                isLoader ?
                    <ClipLoader color={"green"} size={50} />
                    :
                    <div ref={lastElementVisible}></div>
            }
        </div>
    );
};

export default ScrollLoader;