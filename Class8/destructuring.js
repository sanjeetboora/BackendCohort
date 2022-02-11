//Destructuring

// let students =  ["atharv", "Gurvinder", "arnab", "sapta"];
// let stud1 = students[0];
// let stud2 = students[1];

//==============================================================

// let [stud1, stud2] = ["atharv", "Gurvinder", "arnab", "sapta"];
// let students =  ["atharv", "Gurvinder", "arnab", "dolby"];
// let [,stud2,, stud4 = "no student"] = students;

// let [stud1,stud2, ...restStudents] = students; //varArgs
// console.log(stud1);
// console.log(stud2);
// console.log(restStudents);
//console.log(stud3);
//console.log(stud4);

//==============================================================

let avenger = {realName: "tony stark", city: "california", heroName: "Iron Man"};
console.log(avenger.realName , avenger.heroName, avenger.city);

let {realName, city, heroName} = avenger;
console.log(realName, city, heroName);

let {realName:bhaiKaNaam, city: location, heroName: ourHero} = avenger;
//console.log(realName, city, heroName); //won't work here
console.log(bhaiKaNaam, location, ourHero);

let {realName, ...restDetails} = avenger;
console.log(realName);
console.log(restDetails);
