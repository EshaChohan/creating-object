var info = {
    firstName: "Esha ",
    lastName: "Chohan",
    age: 21,
    eyeColor: "brown",
    qualification: "FSc"
};

document.getElementById("info").innerHTML = info.firstName + info.lastName + " is " + info.age + " years old " + " having " + info.eyeColor + " eye color " + " and her qualification is " + info.qualification;

var subject = {
    name: "science",
    chp: 15,
    learnt: 10,
    teacher: "Miss Farah"
}
document.getElementById("subject").innerHTML = subject.teacher + " teaches us " + subject.name + " subject . there are total " + subject.chp + " chapters in which I prepared myself for " + subject.learnt + " chapters"

var dress = {
    style: "maxi",
    color: "grey",
    size: "medium",
    work: "stone",
    sleeves: "full",
}
document.getElementById("dress").innerHTML = dress.style + " in " + dress.color + " color having " + dress.work + " work with " + dress.sleeves + " sleeves in " + dress.size + " size is available "

var jewelry = {
    type: "choker set",
    earrings : "long",
    match : "bracelet and ring",
    made : "ad stones"
}
document.getElementById("jewelry").innerHTML = " I ordered jewelry online. It is a " + jewelry.type + " with " + jewelry.earrings + " Earrings made from " + jewelry.made + " and having matching " + jewelry.match + " also"

var myself = {
    work : "teacher",
className : "four",
students : 25,
subjects : "english"
}
document.getElementById("myself").innerHTML = " i am a " +myself.work + " and i teaches class " + myself.className + " It's total strength is " + myself.students + " I teach them " + myself.subjects + " subject"