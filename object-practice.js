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

var aslamAccess = ['flex'];
console.log(aslamAccess);

var frnd = friends.name;
console.log(frnd);

var friendKeys = Object.keys(friends);
console.log(friendKeys);
var friendsGetValue = Object.values(friends);
console.log(friendsGetValue);

// get object value using for loop 

for ( var i = 0; i<friendKeys.length ; i++) {
    var getKeys = friendKeys[i];
    var getValues = friendsGetValue[i];
    console.log(getKeys + ':' +getValues);
}






