"use client";

import { useState } from "react";
import styles from "../globals.css";
import glitchStyles from "./glitch.css";
import { BrowserProvider, ethers } from "ethers";
import ListElements from "./ListElements";

let provider = null;
const hostAddr = "0x9d3AF4194b3e07d45d0DcBD21dE95edE18B3A221";
let signer = null;

const connectToWallet = async (setInputState) => {
	try {
		provider = new BrowserProvider(window.ethereum);
		signer = await provider.getSigner();
		console.log(signer);
		setInputState(true);
	} catch (e) {
		console.log(e);
	}
};

const sendTransaction = async (ethAmount, setInputState) => {
	let validEth = false;
	let ethVal = "0";
	try {
		ethVal = ethers.parseEther(ethAmount, "ether");
		console.log(ethVal);
		if (ethVal !== 0n) validEth = true;
	} catch (e) {
		validEth = false;
	}
	console.log("Check valid ether bool : ", validEth);
	try {
		if (validEth) {
			let tx = {
				to: hostAddr,
				value: ethVal,
			};
			console.log("Starting Tx");
			let transaction = await signer.sendTransaction(tx);
			console.log(transaction);
			let receipt = await transaction.wait(2);
			console.log(receipt);
		}
	} catch (e) {
		console.log(e);
	}
	setInputState(false);
};

const handleCall = () => {
	window.location.href = "https://calendly.com/mihirsharmaofficial";
};

const handleChange = (e, setEthAmount) => {
	setEthAmount(e.target.value);
};

const HomePage = () => {
	let [ethAmount, setEthAmount] = useState("0");
	let [inputState, setInputState] = useState(false);

	return (
		<div
			className="responsive"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				// width: "100%",
				// height: "100%",
			}}>
			<div className="container">
				<div className="stack" id="stack-main">
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
				<span className="right">welcomes you</span>
			</div>
			<div className="body_text">
				How may I serve your software needs?
			</div>
			<div className="body_text">
				Write to me at{" "}
				<a
					style={{ color: "#aaaaff" }}
					href="mailto:mihir@thenomadicbot.com">
					mihir@thenomadicbot.com
				</a>
			</div>
			<div onClick={handleCall} className="body_text lunch">
				Book a call here
			</div>
			<div
				onClick={() => connectToWallet(setInputState)}
				className="lunch">
				Buy me lunch
			</div>
			<div
				style={{
					fontSize: "2rem",
					lineHeight: "5rem",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "1rem",
				}}>
				{inputState ? (
					<>
						<input
							class_name="input"
							style={{
								// height: "3rem",
								paddingLeft: "1rem",
							}}
							type="text"
							placeholder="Enter ETH amount"
							value={ethAmount}
							onChange={(e) =>
								handleChange(e, setEthAmount, setInputState)
							}
						/>
						<button
							class_name="input"
							style={{
								marginLeft: "1rem",
								textAlign: "center",
								paddingBottom: "3px",
								paddingLeft: "1rem",
								paddingRight: "1rem",
							}}
							onClick={() =>
								sendTransaction(ethAmount, setInputState)
							}>
							Send ETH
						</button>
					</>
				) : null}
			</div>
			<div className="body_text">My specialties</div>
			<ListElements />
		</div>
	);
};

export default HomePage;
