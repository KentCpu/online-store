import { FC, HTMLAttributes } from 'react';
import styles from "./Title.module.scss";
import classNames from "classnames";


interface TitleProps extends HTMLAttributes<HTMLTitleElement> {
    headingLevels?: Sizes;
}

type Sizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Title: FC<TitleProps> = ({ headingLevels = "h1", className, children }) => {
    const Title = `${headingLevels}` as keyof JSX.IntrinsicElements;

    return (
        <Title
            className={classNames(styles.Title, className)}
        >
            {children}
        </Title>
    )
}