import Image from "next/image";
import styles from "./page.module.css";
import Loading from "./loading";
import HomePage from "./(HomeComponents)/HomePage";

export default function Home() {
	return (
		<main className={styles.main}>
			<HomePage />
		</main>
	);
}
