// function val(e) {
// let username = document.getElementById('Username');
// let password = document.getElementById('Password');
// let confirmPassword = document.getElementById('ConfirmPassword');
// let email = document.getElementById('Email');
// // let form = document.getElementById('form');
// let userError = [];
// let passError = [];
// let confirmPass = [];
// let emailError = [];



//     let userregex = /^([A-Za-z0-9]){3,20}$/;
//     let passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//     let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//     if(username.value === '' || username.value === 'null') {
//         userError.push('username cannot be empty');
//         document.querySelector('.user-message').innerHTML = userError.join(', ');
//         return false;

//     } if (userregex.test(username.value) == false) {
//         userError.push('username must contain atleast 3 alphanumeric character');
//         document.querySelector('.user-message').innerHTML = userError.join(', ');
//         return false;
//     }
//      if (emailregex.test(email.value) == false) {
//         emailError.push('enter a valid email address');
//         document.querySelector('.email-message').innerHTML = emailError.join(', ');
//         return false;
//     }
//      if(password.value === '' || password.value === 'null') {
//         passError.push('password cannot be empty')
//         document.querySelector('.pass-message').innerHTML = passError.join(', ');
//         return false;
//     }
//      if(passregex.test(password.value) == false) {
//         passError.push('password must contain min 8 characters and one uppercase and one number and symbol');
//         document.querySelector('.pass-message').innerHTML = passError.join(', ');
//         return false;
//     } if(confirmPassword.value === '' || confirmPassword.value === null) {
//         confirmPass.push('confirm password cannot be empty')
//         document.querySelector('.confirm-message').innerHTML = confirmPass.join(', ');
//         return false;
//     } if(password.value!== ConfirmPassword.value) {
//         confirmPass.push('password and confirm password must be same')
//         document.querySelector('.confirm-message').innerHTML = confirmPass.join(', ');
//         return false;
//     }
//    else {
//        return false;
//    }
// }
document.getElementById('my-message').style.display = 'none';
document.getElementById("form").onsubmit = function () {
    document.getElementById('my-message').style.display = 'block'
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('Password').value;
    var confirmPassword = document.getElementById('ConfirmPassword').value;
    let userregex = /^([A-Za-z0-9]){3,20}$/;
    let passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let userError = [];
    let emailError = [];
    let passError = [];
    let confirmPass = [];

    var submit = true;

    if(name === '' || name === 'null') {
        userError.push('username cannot be empty');
        document.getElementById('my-message').innerHTML = userError.join(', ');
        return false;

    } if (userregex.test(name) == false) {
        userError.push('username must contain atleast 3 alphanumeric character');
        document.getElementById('my-message').innerHTML = userError.join(', ');
        return false;
    }
     if (emailregex.test(email) == false) {
        emailError.push('enter a valid email address');
        document.getElementById('my-message').innerHTML = emailError.join(', ');
        return false;
    }
     if(password === '' || password === 'null') {
        passError.push('password cannot be empty')
        document.getElementById('my-message').innerHTML = passError.join(', ');
        return false;
    }
     if(passregex.test(password) == false) {
        passError.push('password must contain min 8 characters and one uppercase and one number and symbol');
        document.getElementById('my-message').innerHTML = passError.join(', ');
        return false;
    } if(confirmPassword === '' || confirmPassword === null) {
        confirmPass.push('confirm password cannot be empty')
        document.getElementById('my-message').innerHTML = confirmPass.join(', ');
        return false;
    } if(ConfirmPassword == !password) {
        confirmPass.push('password and confirm password must be same')
        document.getElementById('my-message').innerHTML = confirmPass.join(', ');
        return false;
    }

    return submit;
}

// function removeWarning() {
//     document.getElementById(this.id + "_error").innerHTML = "";
// }

// document.getElementById("name").onkeyup = removeWarning;
// document.getElementById("email").onkeyup = removeWarning;
