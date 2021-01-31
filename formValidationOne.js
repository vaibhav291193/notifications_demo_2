
function formValidation()
{
var errors = "";
var petName = document.petForm.petName;
var petType = document.petForm.petType;
var confirm = document.petForm.confirm;

document.getElementById("errHeading").innerHTML = "";
document.getElementById("formErrList").innerHTML = errors;
document.getElementById("formErrors").tabindex = "-1";
document.getElementById("formErrors").style.display = "none";
document.getElementById("errParentDiv").style.display ="none";

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
errors = errors + "<li><a href=#petName>The pet&rsquo;s name is too short.</a></li>";
for( i = 0; i < petNameErrorNode.length ; i++ ) {
 petNameErrorNode[i].style.display = "";
}
}
if(!petTypeValidation(petType)) {
errors = errors + "<li><a href=#petType>You must select and option.</a></li>";
for( i = 0; i < petTypeErrorNode.length ; i++ ) {
 petTypeErrorNode[i].style.display = "";
}
}
if(!confirmValidation(confirm)) {
errors = errors + "<li><a href=#confirm>You must confirm your pet&rsquo;s information.</a></li>";
for( i = 0; i < confirmErrorNode.length ; i++ ) {
 confirmErrorNode[i].style.display = "";
}
}
if(errors != "") {
document.getElementById("errHeading").innerHTML = "The form contains errors:";
document.getElementById("formErrList").innerHTML = errors;
document.getElementById("formErrors").style.display = "";
document.getElementById("formErrors").tabindex = "0";
document.getElementById("formErrors").focus();
document.getElementById("errParentDiv").style.display = "";
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


