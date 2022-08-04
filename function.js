// Average og assignment marks 

function assignmentMarks (assigment1 , assigment2, assigment3) {
    const marks = assigment1 + assigment2 + assigment3;
    const averageMarks = marks / 3;
    return averageMarks;
    
};

var assignment1 = 60;
var assigment2 = 60;
var assigment3 = 50;

var getValue = assignmentMarks (assignment1 , assigment2, assigment3);
console.log(getValue);





