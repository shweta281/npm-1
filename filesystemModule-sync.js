const fs= require("fs");

console.log('starting the file');

const first= fs.readFileSync("./content/outer.txt","utf-8")
const second= fs.readFileSync("./content/subfolder/inner.txt", "utf8")

console.log(first);
console.log(second);

fs.writeFileSync(
    "./content/writtenWithNode.txt",
    `hello this is file written with js:and its pretty cool
    basically it creates a new file incase it dont exists with the given path
    ans incase it does exits then in that case it over writes the file .
    heres the content of already existing files: ${first}  and ${second}.
    use { flag:'a' } for appending tho`,
    {flag:'a'}
);

console.log("ending the file starting next task");

