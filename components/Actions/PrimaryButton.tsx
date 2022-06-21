import React, { FC, ReactNode } from "react";

import styles from "../../styles/Actions.module.scss";

interface IButton {
    children: ReactNode;
}

const PrimaryButton: FC<IButton> = ({ children }) => {
    return <button className={styles.primary}>{children}</button>;
};

export default PrimaryButton;
