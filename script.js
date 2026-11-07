import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const blogPath = "/contents/blog/"
const homeContentPath = "/contents/home.md"
const aboutContentPath = "/contents/about.md"
let blogsJSON
let blogTable = document.getElementById("blogsTable");

const getBlog = async () => {
	const blogsJSONPath = "/contents/blogs.json"
	const res = await fetch(blogsJSONPath);
	blogsJSON = await res.json();
	console.log(blogsJSON);
}

/*
const homeContent =  await getContentFromMD(homeContentPath.text());
document.getElementById("contentContainer").innerHTML = marked.parse(homeContent);
*/

await getBlog();

for (const key in blogsJSON) {
	const title = blogsJSON[key]['data']['title'];
	const date = blogsJSON[key]['data']['date'];
	
	const row = blogTable.insertRow();
}










