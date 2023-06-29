import styles from "../globals.css";
import glitchStyles from "./glitch.css";

const HomePage = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "100%",
				fontFamily: "Space Mono",
				marginTop: "2rem",
			}}>
			{/* <div
				style={{
					fontSize: "5rem",
					lineHeight: "5rem",
					marginBottom: "2rem",
					// fontWeight: "normal",
				}}>
				The Nomadic Bot welcomes you
			</div> */}
			<div class="container">
				<div class="stack" id="stack-main">
					<span style={{ fontFamily: "Space Mono" }} id="stack-1">
						THE NOMADIC BOT
					</span>
					<span style={{ fontFamily: "Space Mono" }} id="stack-2">
						THE NOMADIC BOT
					</span>
					<span style={{ fontFamily: "Space Mono" }} id="stack-3">
						THE NOMADIC BOT
					</span>
					<span style={{ fontFamily: "Space Mono" }} id="stack-4">
						THE NOMADIC BOT
					</span>
				</div>
				<span class="right">welcomes you</span>
			</div>
			<div style={{ fontSize: "2rem", lineHeight: "5rem" }}>
				How may I serve your software needs?
			</div>
			<div style={{ fontSize: "2rem", lineHeight: "5rem" }}>
				Write to me at{" "}
				<a
					style={{ color: "#aaaaff" }}
					href="mailto:mihir@thenomadicbot.com">
					mihir@thenomadicbot.com
				</a>
			</div>
			<div style={{ fontSize: "2rem", lineHeight: "5rem" }}>
				Book a call{" "}
				<a
					style={{ color: "#aaaaff" }}
					href="https://calendly.com/mihirsharmaofficial">
					here
				</a>
			</div>
			<div style={{ fontSize: "2rem", lineHeight: "5rem" }}>
				My specialties
			</div>
			<ul
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: "100%",
					fontSize: "2rem",
					lineHeight: "3rem",
				}}>
				<li>Full Stack development</li>
				<li>Web development</li>
				<li>Web3 solutions</li>
			</ul>
		</div>
	);
};

export default HomePage;
