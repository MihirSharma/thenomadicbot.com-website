import React, { useState, useEffect } from "react";

const original = [
	"Full Stack development",
	"Mobile development",
	"Web development",
	"Web3 solutions",
];

const intervalFunc = (setSkillList) => {
	setInterval(() => {
		let glitchChar = ["@", "#", "$", "&", "*", "!"];
		let min = 0;
		let max = original.length - 1;
		let random1 = Math.floor(Math.random() * (max - min + 1)) + min;
		let oldString = original[random1];
		let random2 =
			Math.floor(Math.random() * (oldString.length - 1 - min + 1)) + min;
		let random3 =
			Math.floor(Math.random() * (oldString.length - 1 - min + 1)) + min;
		let random4 =
			Math.floor(Math.random() * (oldString.length - 1 - min + 1)) + min;
		let random5 =
			Math.floor(Math.random() * (oldString.length - 1 - min + 1)) + min;
		let randomArr = [random2, random3, random4, random5];
		randomArr.sort(function (a, b) {
			return a - b;
		});
		let newString =
			oldString.substring(0, randomArr[0]) +
			glitchChar[Math.floor(Math.random() * glitchChar.length)] +
			oldString.substring(randomArr[0], randomArr[1]) +
			glitchChar[Math.floor(Math.random() * glitchChar.length)] +
			oldString.substring(randomArr[1], randomArr[2]) +
			glitchChar[Math.floor(Math.random() * glitchChar.length)] +
			oldString.substring(randomArr[2], randomArr[3]) +
			glitchChar[Math.floor(Math.random() * glitchChar.length)] +
			oldString.substring(randomArr[3]);
		let newArr = Array.from(original);
		newArr.splice(random1, 1, newString);
		setSkillList(newArr);

		setTimeout(() => {
			setSkillList(original);
		}, 200);
	}, 3000);
};

const ListElements = () => {
	let [skillList, setSkillList] = useState([
		"Full Stack development",
		"Mobile development",
		"Web development",
		"Web3 solutions",
	]);

	useEffect(() => {
		intervalFunc(setSkillList);
	}, []);

	return (
		<ul
			className="body_text"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				width: "80vw",
				height: "100%",
			}}>
			{skillList.map((it, idx) => (
				<li key={idx}>{it}</li>
			))}
		</ul>
	);
};

export default ListElements;
