const path= require("path");
const pathFunc={
    "path_sep": path.sep,
    "path_join": path.join("hehe", "watisthis", "huehue"),
    "base_name":path.basename(__dirname),
    "absolute_path": path.resolve(__dirname, "node-app")
};
console.log(pathFunc);
