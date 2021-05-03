'use strict';
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active')
);
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active')
);
//coded by : @zaidik


//start code
let usersArray = [];
let localsuers = localStorage.getItem('users');

if (localsuers != null) {
    usersArray = JSON.parse(localsuers);
}



let register = document.getElementById('form-register');
let submit = document.getElementById('signup-submit');
let submitSignIn = document.getElementById('submit-signin');
let signin = document.getElementById('form-signin');




//store users data
submit.addEventListener('click', function (event) {
    event.preventDefault();
    let id = event.target.id;
    let name = register.userName.value;
    let email = register.email.value;


    if (id === 'signup-submit') { // save all users' data

        let password = register.pass.value;
        if (name && email && password) {
            new User(name, email, password);
            localStorage.setItem('users', JSON.stringify(usersArray));
        }
        console.log(usersArray);
        register.userName.value = '';
        register.email.value = '';
        register.pass.value = '';
    }
});



// user constructor:
function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    usersArray.push(this);
}



//sign in 
submitSignIn.addEventListener('click', function (event) {
    event.preventDefault();
    let email = signin.signinEmail.value;
    let password = signin.signinPass.value;
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email === email && usersArray[i].password === password) {
            console.log("success");
            window.open('home.html', '_self');
            signin.signinEmail.value = '';
            signin.signinPass.value = '';
            return;

        }


    }
    alert("your email or password is wrong.. ");
    signin.signinEmail.value = '';
    signin.signinPass.value = '';

});
