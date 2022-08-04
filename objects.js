const orin = {
    name : 'orin',
    nickName :'fahim muntasir orin',
    isSleeping : function (){
        this.isFooding();
        return console.log('sleeping');
    },
    isFooding : function() {
       return console.log('he is fooding');
    },
};

let orinName = orin.value;
console.log(orinName);









function findLargest (number) {
    let largest = 0;
    for(var i = 0 ; i<number.length; i++){
        var largestNumber = number[i]; 
        if (largestNumber > largest) {
            largestNumber = largest;
        };
    };
    return largest;
};










