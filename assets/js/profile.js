// ASSIGN ALL PROFILE INPUTS
const inputs = document.querySelectorAll('.profileinput');
// ASSIGN EDIT BUTTON
const btnEdit = document.querySelector('#btn-edit');
// ASSIGN CANCEL BUTTON
const btnCancel = document.querySelector('#btn-cancel');

// TRIGGER EDIT BUTTON
btnEdit.addEventListener('click', editProfile);
// TRIGGER CANCEL BUTTON
btnCancel.addEventListener('click', cancelEditProfile);

// EDIT PROFILE FUNCTION
function editProfile() {
    inputs.forEach(input => {
        input.removeAttribute('disabled');
    });
    this.innerText = 'আপডেট';
}

// CANCEL PROFILE FUNCTION
function cancelEditProfile() {
    inputs.forEach(input => {
        input.setAttribute('disabled', 'true');
    });
}