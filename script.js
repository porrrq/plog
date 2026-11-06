import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

async function getWelcome(){
	const welcomeContentMD = await fetch("welcomeContent.md");
	const content = await welcomeContentMD.text();
	document.getElementById("contentContainer").innerHTML = marked.parse(content);
}

getWelcome();
