var friends = {
    name : 'aslam',
    age:13,
    education:'Inter 2nd Year',
    fatherName : 'Rahim Rahman',
    formerDesition : 'feather',
    flex : 'no flex',
    color : 'white',
    hair : 'Black',
};


friends.name = 'orin';
console.log(friends);

console.log(friends['education']);

var getKey = Object.keys(friends);
console.log(getKey);
var getValue = Object.values (friends);
console.log(getValue);

for(var i = 0 ; i<getKey.length; i ++) {
    getLoopKey = getKey[i];
    getValueKey = getValue[i];
    console.log(getLoopKey + ' : ' + getValueKey);

}