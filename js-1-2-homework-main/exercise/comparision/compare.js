/**
 * /*
 *   BOOLEAN WITH COMPARISON OPERATORS
 *   ---------------------------------
 *   Using comparison operators complete the unfinished statements.
 *   The variables should have values that match the expected results.
 *
 * @format
 */

var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors=function(){
  if (studentCount>mentorCount) {
    return true;
  }else{return false;}
}; // finish this statement

var roomMaxCapacity = 25;
var enoughSpaceInRoom=true; // finish this statement

var personA = "Zahra";
var personB = "Fatemeh";
var sameName=function(){
  if (personA===personB) {
    return true;
  }else{
    return false;
  }
}; // finish this statement

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log("Are there more students than mentors?", moreStudentsThanMentors());
console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);
console.log("Do person A and person B have the the same name?", sameName());

/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false
*/
