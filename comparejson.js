const obj1 = {name: "Person 1", age: 5};
const obj2 = {age: 5, name: "Person 1"};

function areObjectsEqual(obj1, obj2) {
    const sortedObj1 = JSON.stringify(Object.keys(obj1).sort().reduce((acc, key) => ({ ...acc, [key]: obj1[key] }), {}));
    const sortedObj2 = JSON.stringify(Object.keys(obj2).sort().reduce((acc, key) => ({ ...acc, [key]: obj2[key] }), {}));
    return sortedObj1 === sortedObj2;
}

console.log(areObjectsEqual(obj1, obj2)); // Should output: true
