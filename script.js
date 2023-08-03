function firstNameValidation() {
    let valid = true;
    var data = $('#fname').val();
    if (data == '') { //* First name required
        $('#fnameError').html("* This field is required!");
        valid = false;
    } else if (!/^[A-Za-z\s]*$/.test(data)) { //* Only Aphabates
        $('#fnameError').html("* Number & Special Characters Not Allowed!");
        valid = false;
    } else if (data.length < 3) { //* Min 3 chars
        $('#fnameError').html("* Minimun 3 character are required!");
        valid = false;
    } else if (data.length > 15) { //* Max 15 chars
        $('#fnameError').html("* Maximum 14 character are required!");
        valid = false;
    } else {
        $('#fnameError').html('')
    }
    return valid;
}

function lastNameValidation() {
    let valid = true;
    var data = $('#lname').val();
    if (data == '') { //* Required
        $('#lnameError').html("* This field is required!");
        valid = false;
    } else if (!/^[A-Za-z\s]*$/.test(data)) { //*
        $('#lnameError').html("* Number & Special Characters Not Allowed!");
        valid = false;
    } else if (data.length < 3) {
        $('#lnameError').html("* Minimun 3 character are required!");
        valid = false;
    } else if (data.length > 15) {
        $('#lnameError').html("* Maximum 14 character are required!");
        valid = false;
    } else {
        $('#lnameError').html('')
    }
    return valid;
}

$("#country").on("change", function () {
    let select = $('#country').val();
    $('#countryError').html('')
    if (select == "India") {
        $('.form-state').slideDown(500)
        arr = ["Maharashtra", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Punjab", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",];
    } else if (select == "USA") {
        $('.form-state').slideDown(500)
        arr = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Delaware", "Florida", "Georgia", "Hawaii"];
    } else if (select == "Australia") {
        $('.form-state').slideDown(500)
        arr = ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania", "Northern Territory"];
    }
    else {
        $('.form-state').slideUp(500)
        arr = [];
    }
    var string = "";
    for (let i = 0; i < arr.length; i++) {
        string = string + "<option>" + arr[i] + "</option>";
    }
    $('#output').html("<select>" + string + "</select>")
});

function countryValidation() {
    let valid = true
    let select = $('#country').val();
    let arr;
    if (select == '') {
        $('#countryError').html("* This field is required!");
        valid = false;
    }
    return valid;
}

function zipcodeValidation() {
    let valid = true
    var zip = $('#zip').val()
    if (!/^[0-9]+$/.test(zip)) {
        $('#zipError').html("* This field is required!");
        valid = false
    }
    else if (zip.length > 7) {
        $('#zipError').html("* Maximum 7 Digit Zip Code");
        valid = false
    }
    else {
        $('#zipError').html("");
    }
    return valid;
}

function emailValidation() {
    let valid = true;
    email = $('#email').val()
    if (email == '') { //?
        $('#emailError').html("* This field is required!");
        valid = false
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        $('#emailError').html("* Please enter valid E-mail");
        valid = false
    } else {
        $('#emailError').html("");
    }
    return valid
}

function genderValidation() {
    let valid = true;
    let radio1 = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let radio3 = document.getElementById('radio3');
    if (!(radio1.checked || radio2.checked || radio3.checked)) {
        $('#genderError').html("* This field is required!");
        valid = false
    }
    else {
        $('#genderError').html("");
    }
    return valid;
}

function langValidation() {
    let valid = true
    if (!$('.checkbox-item:checked').length) {
        $('#langError').html("* This field is required!");
        valid = false
    }
    else {
        $('#langError').html("");
    }
    return valid;
}

var pass = "";
var check = "";
function passValidation() {
    let valid = true;
    pass = $('#password').val();
    if (pass == '') {
        $("#passError").html("* This field is required!")
        valid = false;
    }
    else if (pass.length < 8) {
        $("#passError").html("The password must be at least 8 characters long");
        valid = false;
    }

    else if (!/[a-z]/.test(pass)) {
        $("#passError").html("The password must contain at least one lowercase letter");
        valid = false;
    }

    else if (!/[A-Z]/.test(pass)) {
        $("#passError").html("The password must contain at least one uppercase letter");
        valid = false;
    }

    else if (!/[0-9]/.test(pass)) {
        $("#passError").html("The password must contain at least one digit");
        valid = false;
    }

    else if (!/[^a-zA-Z0-9]/.test(pass)) {
        $("#passError").html("The password must contain at least one special character");
        valid = false;
    }
    else {
        check = pass
        $("#passError").html("")
    }
    return valid
}


function cpassValidation() {
    let valid = true;
    let cpass = $('#confirmPassword').val();
    let check = $('#password').val();

    if (cpass == '') {
        $("#cpassError").html("* This field is required!");
        valid = false;
    } else if (cpass !== check) {
        $("#cpassError").html("* Password Didn't Match");
        $("#cpasstrue").html("");
    } else {
        $("#cpassError").html("");
        $("#cpasstrue").html("* Matched!");
    }

    return valid;
}

function mobileValidation() {
    let valid = true;
    let no = $('#phoneNumber').val()
    if (no == '') {
        $("#mobileError").html("* This field is required!")
        valid = false;
    }
    else if (!/^\d{3}\d{3}\d{4}$/.test(no)) {
        $("#mobileError").html("* Enter the Valid Number, No Space or Special Character Allowed!")
        valid = false;
    }
    else {
        $("#mobileError").html("")
    }

    return valid;
}

function dobValidation() {
    let valid = true;
    const dob = document.getElementById("dob").value;
    const today = new Date();
    const age = today.getFullYear() - dob.substring(0, 4);
    if (dob == '') {
        $("#dobError").html("* This field is required!")
        valid = false;
    }
    else if (age < 18) {
        $("#dobError").html("* You must be at least 18 years old to use this site.!")
        valid = false;
    }
    else {
        $("#dobError").html("")
    }
    return valid;
}

function submitForm() {
    let valid = false
    firstNameValid = firstNameValidation()
    lastNameValid = lastNameValidation()
    countryvalid = countryValidation()
    zipvalid = zipcodeValidation()
    emailvalid = emailValidation()
    gendervalid = genderValidation()
    langvalid = langValidation()
    passvalid = passValidation()
    cpassvalid = cpassValidation()
    novalid = mobileValidation()
    dobvalid = dobValidation();
    $('#fname').on('input', firstNameValidation)
    $('#lname').on('input', lastNameValidation)
    $('#country').on('change', countryValidation)
    $('#zip').on('input', zipcodeValidation)
    $('#email').on('input', emailValidation)
    $('.gender-validation').on('input', genderValidation)
    $('.checkbox-item').on('input', langValidation)
    $('#password').on('input', passValidation)
    $('#confirmPassword').on('input', cpassValidation)
    $('#phoneNumber').on('input', mobileValidation)
    $('#dob').on('input', dobValidation)
    if (firstNameValid && lastNameValid && countryvalid && zipvalid && emailvalid && gendervalid && langvalid && passvalid && cpassvalid && novalid && dobvalid) {
        valid = true
    }
    return valid
}