function formValidation()
{
var errors = [];
var petName = document.petForm.petName;
var petType = document.petForm.petType;
var confirm = document.petForm.confirm;

document.getElementById("errCountText").innerHTML = "";
document.getElementById("errLink").innerHTML = "";

if(!petNameValidation(petName, 5)) {
errors.push(1);
}
if(!petTypeValidation(petType)) {
errors.push(2);
}
if(!confirmValidation(confirm)) {
errors.push(3);
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

function hrefSelector(fieldNo) {
if(fieldNo == 1) {
return "#petName";
} else if(fieldNo == 2) {
return "#petType";
} else if(fieldNo == 3) {
return "#confirm";
}
}
