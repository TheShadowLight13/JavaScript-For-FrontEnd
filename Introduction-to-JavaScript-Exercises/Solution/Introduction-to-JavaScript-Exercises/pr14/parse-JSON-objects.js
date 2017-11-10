function parseJSON(input) {
    let objects = [];
    for (let line of input) {
        let object = JSON.parse(line);
        objects.push(object);
    }

    return objects;
}

function printObjects(objects) {
    for (let object of objects) {
        let keys = Object.keys(object);
        for (let key of keys) {
            let capitalizedKey = key[0].toUpperCase() + key.substring(1);
            let value = object[key];
            console.log(`${capitalizedKey}: ${value}`);
        }
    }
}

let input = ["{\"name\":\"Gosho\",\"age\":10,\"date\":\"19/06/2005\"}",
            "{\"name\":\"Tosho\",\"age\":11,\"date\":\"04/04/2005\"}"
];
let objects = parseJSON(input);
printObjects(objects);

