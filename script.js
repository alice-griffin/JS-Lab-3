const submissions = [
    { name: "Jane", score: 95, date: "2020-01-24", passed: true },
    { name: "Joe", score: 77, date: "2018-05-14", passed: true },
    { name: "Jack", score: 59, date: "2019-07-05", passed: false },
    { name: "Jill", score: 88, date: "2020-04-22", passed: true }
]

function addSubmission(array, name, score, date) {
    let newSub = { newName: name, newScore: score, newDate: date, passed: (score >= 60 ? true : false) }
    array.push(newSub);
}

addSubmission(submissions, "Alice", 90, "2020-5-14");

console.log(submissions);

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

function deleteSubmissionByName(array, name) {
    array.forEach((s, index) => {
        if (s.name === name) {
            array.splice(index, 1);
        }
    })
}

function editSubmission(array, index, score) {
    array[index].score = score;
    array[index].passed = score >= 60 ? true : false;
}

editSubmission(submissions, 0, 100);
console.log(submissions);

function findSubmissionsbyName(array, name) {
    console.log(array.find(array => array.name === name))
}

findSubmissionsbyName(submissions, "Joe")

function findLowestScore(array) {
    let lowestScore = array[0];
    array.forEach((obj) => {
        if (obj.score < lowestScore.score) {
            lowestScore = obj;
        }
    })
    return lowestScore;
}
console.log(findLowestScore(submissions));


function findAverageScore(array) {
    let arrayLength = array.length;
    let total = 0;
    for (const item of array) {
        total += item.score
        return total / arrayLength;
    }
}

console.log(findAverageScore(submissions));

function filterPassing(array) {
    let newArray = array.filter(item => item.passing === true)
    return newArray;
}

function filter90AndAbove(array) {
    let newerArray = array.filter(item => item.score >= 90 === true)
    return newerArray;
}

console.log(filter90AndAbove(submissions));
