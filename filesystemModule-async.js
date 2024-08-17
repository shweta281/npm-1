const { readFile, writeFile }= require("fs");


console.log("starting the file");
readFile( "./content/outer.txt", "utf-8", (err, result) => {
    console.log("start writing the file");
    if(err){
        console.log(err);
        return ;
    }
    else{
        console.log(result);
    }
    const res=result;
    writeFile( "./content/thisIswrittenUsingNode-async.txt", res, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("ending writing the file ");
        }
    })
});
console.log("ending the file starting next file");



