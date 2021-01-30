function formValidation()
{
var errors = "";
var petName = document.petForm.petName;
var petType = document.petForm.petType;
var confirm = document.petForm.confirm;

document.getElementById("errHeading").innerHTML = "";
document.getElementById("formErrList").innerHTML = errors;

if(!petNameValidation(petName, 5)) {
errors = errors + "<li><a href=#petName>The pet’s name is too short.</a></li>";
}
if(!petTypeValidation(petType)) {
errors = errors + "<li><a href=#petType>You must select and option.</a></li>";
}
if(!confirmValidation(confirm)) {
errors = errors + "<li><a href=#confirm>You must confirm your pet’s information.</a></li>";
}
if(errors != "") {
document.getElementById("errHeading").innerHTML = "The form contains errors:";
document.getElementById("formErrList").innerHTML = errors;
document.getElementById("formErrors").focus();
return false;
}
return true;
}

function petNameValidation(petName, minlength)
{
document.getElementById("petNameError").innerHTML = null;
var petNameLen = petName.value.length;
if (petNameLen < minlength)
{
document.getElementById("petNameError").innerHTML = "Error: The pet’s name is too short.";
return false;
}
return true;
}

function petTypeValidation(petType)
{
document.getElementById("petTypeError").innerHTML = null;
var petTypeValue = petType.value;
if (petTypeValue <= 0)
{
document.getElementById("petTypeError").innerHTML = "Error: You must select and option.";
return false;
}
return true;
}
function confirmValidation(confirm)
{
document.getElementById("confirmError").innerHTML = null;
var confirmChd = confirm.checked;
if (confirmChd == false)
{
document.getElementById("confirmError").innerHTML = "Error: You must confirm your pet’s information.";
return false;
}
return true;
}
