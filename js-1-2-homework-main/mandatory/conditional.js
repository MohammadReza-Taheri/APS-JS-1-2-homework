/** @format */

// if statement
/*
    if Shaden is a mentor print out "Hi Shaden, you are a mentor"
    if Shaden is a student print out "Hi Shaden, you are student"
    if Shaden is a teacher print out "Hi Shaden, you are a teacher"
    if she is none of above, print out "Hi Shaden, you should join IMD"
*/

let yourName = "Shaden";
let yourRole = "mentor";
function shadenRoleFinder() {
    if (yourRole.toUpperCase()==="MENTOR") {
        console.log(`Hi ${yourName}, you are a mentor`);
    }else if (yourRole.toUpperCase()==="STUDENT") {
        console.log(`Hi ${yourName}, you are student`);
    }else if (yourRole.toUpperCase()==="TEACHER") {
        console.log(`Hi ${yourName}, you are a teacher`);
    }else{console.log(`Hi ${yourName}, you should join IMD`);}
}
/* 
EXPECTED RESULT
---------------
Hi, I'm Shaden, you are a mentor.
*/
