import React, { FC, ReactNode } from "react";

import styles from "../../styles/Actions.module.scss";

interface IButton {
    children: ReactNode;
}

const SecondaryButton: FC<IButton> = ({ children }) => {
    return <button className={styles.secondary}>{children}</button>;
};

export default SecondaryButton;
