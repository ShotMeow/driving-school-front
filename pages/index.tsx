import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Driving School</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <main></main>
            <footer></footer>
        </div>
    );
};

export default Home;
