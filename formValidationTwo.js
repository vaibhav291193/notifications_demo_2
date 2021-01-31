function formValidation()
{
var errors = [];
var petName = document.petForm.petName;
var petType = document.petForm.petType;
var confirm = document.petForm.confirm;

document.getElementById("errCountText").innerHTML = "";
document.getElementById("errLink").innerHTML = "";

var i;
var petNameErrorNode = document.getElementsByClassName("petNameError");
for( i = 0; i < petNameErrorNode.length ; i++ ) {
 petNameErrorNode[i].style.display = "none";
}
var petTypeErrorNode = document.getElementsByClassName("petTypeError");
for( i = 0; i < petTypeErrorNode.length ; i++ ) {
 petTypeErrorNode[i].style.display = "none";
}
var confirmErrorNode = document.getElementsByClassName("confirmError");
for( i = 0; i < confirmErrorNode.length ; i++ ) {
 confirmErrorNode[i].style.display = "none";
}

if(!petNameValidation(petName, 5)) {
errors.push(1);
for( i = 0; i < petNameErrorNode.length ; i++ ) {
 petNameErrorNode[i].style.display = "";
}
}
if(!petTypeValidation(petType)) {
errors.push(2);
for( i = 0; i < petTypeErrorNode.length ; i++ ) {
 petTypeErrorNode[i].style.display = "";
}
}
if(!confirmValidation(confirm)) {
errors.push(3);
for( i = 0; i < confirmErrorNode.length ; i++ ) {
 confirmErrorNode[i].style.display = "";
}
}
if(errors.length > 0) {
document.getElementById("errCountText").innerHTML = "There are <b>" + errors.length + " error(s) </b>" + "in this section.";
document.getElementById("errLink").innerHTML = "Go to error.";
document.getElementById("errLink").setAttribute('href', hrefSelector(errors[0]));
document.getElementById("errLink").focus();
return false;
}
return true;
}

function petNameValidation(petName, minlength)
{
var petNameLen = petName.value.length;
if (petNameLen < minlength)
{
return false;
}
return true;
}

function petTypeValidation(petType)
{
var petTypeValue = petType.value;
if (petTypeValue <= 0)
{
return false;
}
return true;
}
function confirmValidation(confirm)
{
var confirmChd = confirm.checked;
if (confirmChd == false)
{
return false;
}
return true;
}

function hrefSelector(fieldNo) {
if(fieldNo == 1) {
return "#petName";
} else if(fieldNo == 2) {
return "#petType";
} else if(fieldNo == 3) {
return "#confirm";
}
}