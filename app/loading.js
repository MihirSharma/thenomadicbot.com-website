import Image from "next/image";
import styles from "./page.module.css";

export default function Loading() {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Image
				className={styles.logo}
				src="/../public/44.gif"
				alt="Next.js Logo"
				width={256}
				height={256}
				priority
			/>
		</div>
	);
}
