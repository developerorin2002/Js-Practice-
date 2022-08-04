var roastGiven = 0;
while (roastGiven < 7) {
    console.log(roastGiven);
    console.log('roast');
    roastGiven++;
}

var know = ['html','css','js','firebase','react','route','megamall','infinix'];

for(var i = 0; i<know.length;i++){
    var singleKnow = know[i];
    console.log(singleKnow);
    if(singleKnow == 'firebase'){
        break;
    }else{
        continue;
    };

};
for (var i = 1; i<=100; i = i + 2){
    console.log(i);
}







