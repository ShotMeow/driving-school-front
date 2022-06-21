import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.scss";

import logo from "../../assets/images/logo.png";
import Image from "next/image";
import PrimaryButton from "../Actions/PrimaryButton";
import SecondaryButton from "../Actions/SecondaryButton";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.info}>
                <Link href='#'>
                    <a className={styles.logo}>
                        <Image src={logo} alt='Логотип' />
                        <span>Автошкола</span>
                    </a>
                </Link>
                <div className={styles.decoration}></div>
                <nav>
                    <ul className={styles.nav}>
                        <li>
                            <Link href='#'>
                                <a>Тарифы и цены</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Этапы обучения</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Контакты</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.actions}>
                <PrimaryButton>+7 (985) 775-12-62</PrimaryButton>
                <SecondaryButton>Авторизация</SecondaryButton>
            </div>
        </header>
    );
};

export default Header;
