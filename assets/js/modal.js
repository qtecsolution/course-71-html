/**
* // DEFINE LOGIN MODAL,
* // REGISTER MODAL,
* // FORGOT PASSWORD MODAL,
* // CHANGE PASSWORD MODAL,
* // VERIFICATIONS MODAL,
* // CONFIRM VERIFICATIONS MODAL
**/
const loginModal = document.querySelector('#loginModal');
const registerModal = document.querySelector('#registerModal');
const forgotPasswordModal = document.querySelector('#forgotpass');
const changePasswordModal = document.querySelector('#changepassword');
const verificationsModal = document.querySelector('#verifications');
const confirmVerificationModal = document.querySelector('#verificationconfirm');

/**
* // DEFINE FORGOT BUTTON,
* // SIGNUP BUTTON,
* // BACK TO LOGIN BUTTON,
* // FORGOT TO CHANGE BUTTON,
* // CHANGE TO VERIFICATION BUTTON,
* // CONFIRM VERIFICATIONS BUTTON
**/
const forgotButton = document.querySelector('#forgot-button');
const signupButtons = Array.from(document.querySelectorAll('.btn-signup'));
const backToLoginButtons = Array.from(document.querySelectorAll('.btn-back'));
const forgotToChangeButton = document.querySelector('#forgot-to-change');
const changeToVerificationButton = document.querySelector('#change-to-verification');
const verificationConfirmButton = document.querySelector('#verify-confirm');
const signInButton = document.querySelector('#btn-signin');

/**
* // TRIGGER FORGOT BUTTON,
* // TRIGGER SIGNUP BUTTON,
* // TRIGGER BACK TO LOGIN BUTTON,
* // TRIGGER FORGOT TO CHANGE BUTTON,
* // TRIGGER CHANGE TO VERIFICATION BUTTON,
* // TRIGGER CONFIRM VERIFICATIONS BUTTON
**/
forgotButton.addEventListener('click', showForgotPassword);
forgotToChangeButton.addEventListener('click', showChangePassword);
changeToVerificationButton.addEventListener('click', showVerification);
verificationConfirmButton.addEventListener('click', showConfirmedChangePassword);
signInButton.addEventListener('click', showLogin);

backToLoginButtons.forEach(button => {
    button.addEventListener('click', backToLogin);
});

signupButtons.forEach(button => {
    button.addEventListener('click', showSignup);
});

/**
* // LOGIN MODAL,
* // REGISTER MODAL,
* // FORGOT PASSWORD MODAL,
* // CHANGE PASSWORD MODAL,
* // VERIFICATIONS MODAL,
* // CONFIRM VERIFICATIONS MODAL
**/
const login = new bootstrap.Modal(loginModal);
const register = new bootstrap.Modal(registerModal);
const forgot = new bootstrap.Modal(forgotPasswordModal);
const change = new bootstrap.Modal(changePasswordModal);
const verification = new bootstrap.Modal(verificationsModal);
const confirmVerification = new bootstrap.Modal(confirmVerificationModal);

// GO LOGIN TO FORGOT PASSWORD
function showForgotPassword() {
    login.hide();
    forgot.show();
}

// SHOW SIGNUP
function showSignup() {
    forgot.hide();
    change.hide();
    verification.hide();
    confirmVerification.hide();
    login.hide();
    register.show();
}

// SHOW SIGNUP
function showLogin() {
    login.show();
    register.hide();
}

// BACK TO LOGIN FROM FORGOT PASSWORD
function backToLogin() {
    forgot.hide();
    change.hide();
    verification.hide();
    confirmVerification.hide();
    register.hide();
    login.show();
}

// GO FORGOT PASSWORD TO CHANGE PASSWORD
function showChangePassword() {
    forgot.hide();
    change.show();
}

// GO CHANGE PASSWORD TO CONFIRM
function showConfirmedChangePassword() {
    verification.hide();
    confirmVerification.show();
}

// GO CHANGE PASSWORD TO VERIFICATION
function showVerification() {
    change.hide();
    verification.show();
}