let options = {
    width : 1024,
    height : 1024,
    name : "test"
};

console.log(options.name);

options.colors = {
border : "black",
bg : "red"
}

console.log(options);

for (let key in options) {
    console.log("Option " + key + " is " + options[key]);
}

console.log(Object.keys(options).length);