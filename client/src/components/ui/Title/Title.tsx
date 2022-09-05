import React, { FC, PropsWithChildren } from 'react';
import styles from "./Title.module.scss";
import classNames from "classnames";
interface TitleProps {
    headingLevels?: Sizes;
    style?: object;
}

type Sizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Title: FC<PropsWithChildren<TitleProps>> = ({ headingLevels = "h1", style, children }) => {
    const Title = `${headingLevels}` as keyof JSX.IntrinsicElements;

    return (
        <Title
            className={classNames(styles.Title, style)}
        >
            {children}
        </Title>
    )
}

export default Title;
