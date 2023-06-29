import Image from "next/image";
import styles from "./page.module.css";
import Loading from "./loading";
import HomePage from "./(HomeComponents)/HomePage";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<main className={styles.main}>
				<HomePage />
			</main>
		</>
	);
}
