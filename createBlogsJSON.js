const matter = require('gray-matter');
const fs = require('fs');
const { marked } = require('marked');

const blogsJSONPath = "contents/blogs.json"
const dir = "contents/blog/"
const extension = ".md"

let blogsJSON = fs.readFileSync(blogsJSONPath,'utf8');
blogsJSON = blogsJSON ? JSON.parse(blogsJSON) : {};

const allBlogFn = fs.readdirSync(dir).filter(fn => fn.endsWith(extension));

allBlogFn.forEach(fn => {
	
	try {
		const data = fs.readFileSync(dir+fn,'utf8');
		const blogObj = matter(data);
		const key = blogObj['data']['slug'];
		blogObj['content'] = marked.parse(blogObj['content']);
		blogsJSON[key] = blogObj;
	} catch (err) {
		console.error(err);
		blogsJSON = {};
		return;
	}
})

// Writing a file back
try {
	fs.writeFileSync(blogsJSONPath, JSON.stringify(blogsJSON));
} catch (err) {
	console.error(err);
}






