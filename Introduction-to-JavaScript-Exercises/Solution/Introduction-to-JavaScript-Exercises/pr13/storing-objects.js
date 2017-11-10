function storeObjects(input) {
    let objects = [];
    for (let line of input) {
        let lineTokens = line.split(" -> ");
        let name = lineTokens[0];
        let age = Number(lineTokens[1]);
        let grade = Number(lineTokens[2]);
        let objectInfo = {};
        objectInfo.name = name;
        objectInfo.age = age;
        objectInfo.grade = grade;
        objects.push(objectInfo);
    }

    return objects;
}

function printObjects(objects) {
    for (let obj of objects) {
        let objectName = obj.name;
        let objectAge = obj.age;
        let objectGrade = obj.grade;
        console.log(`Name: ${objectName}`);
        console.log(`Age: ${objectAge}`);
        console.log(`Grade: ${objectGrade.toFixed(2)}`);
    }
}

let input = ['Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57', 'Toni -> 13 -> 4.90'];
let objects = storeObjects(input);
printObjects(objects);