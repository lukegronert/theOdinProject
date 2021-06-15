const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zipCode');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#passwordConfirmation');

const emailError = document.querySelector('#emailError');
const countryError = document.querySelector('#countryError');
const zipCodeError = document.querySelector('#zipCodeError');
const passwordError = document.querySelector('#passwordError');
const passwordConfirmationError = document.querySelector('#passwordConfirmationError');

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    if(email.validity.valid && country.validity.valid && zipCode.validity.valid && 
        password.validity.valid && passwordConfirmation.validity.valid && passwordConfirmation.value !== password.value) {
        showError();
        event.preventDefault();
    }
});

// If input is not valid, show errors. If it is valid, reset the error text to nothing.
function handleErrors(formInputs) {
    formInputs.forEach((input) => {
        input.name.addEventListener('input', (event) => {
            if (!input.name.validity.valid) {
                showError();
            } else {
                resetError(input.error);
            }
        })
    })
}

handleErrors(formInputs);

// Erase error
function resetError(error) {
    error.textContent = '';
    error.className = '';
}

// Array of all inputs and their errors for the handleErrors function
const formInputs = [
    {
        name: email,
        error: emailError
    },
    {
        name: country,
        error: countryError
    },
    {
        name: zipCode,
        error: zipCodeError
    },
    {
        name: password,
        error: passwordError
    },
    {
        name: passwordConfirmation,
        error: passwordConfirmationError
    },
]

function showError() {
    if(email.validity.valueMissing) {
        emailError.textContent = 'You must enter an email address.'
        emailError.className = 'activeError';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'That is not a valid email address.'
        emailError.className = 'activeError';
    } else if (country.validity.valueMissing) {
        countryError.textContent = 'You must enter a country.'
        countryError.className = 'activeError';
    } else if (country.validity.patternMismatch) {
        countryError.textContent = 'You can only enter letters.'
        countryError.className = 'activeError';
    } else if (country.validity.tooShort) {
        countryError.textContent = 'Country name must be 3 or more letters long.'
        countryError.className = 'activeError';
    }else if (zipCode.validity.valueMissing) {
        zipCodeError.textContent = 'You must enter a zip code.'
        zipCodeError.className = 'activeError';
    } else if (zipCode.validity.tooShort) {
        zipCodeError.textContent = 'Zip code must be between 5 and 10 numbers.'
        zipCodeError.className = 'activeError';
    } else if (zipCode.validity.patternMismatch) {
        zipCodeError.textContent = 'Zip code can be only numbers.'
        zipCodeError.className = 'activeError';
    } else if (zipCode.validity.tooLong) {
        zipCodeError.textContent = 'Zip code must be between 5 and 10 numbers.'
        zipCodeError.className = 'activeError';
    } else if (password.validity.tooShort) {
        passwordError.textContent = 'Password must be between 8 and 12 characters.'
        passwordError.className = 'activeError';
    } else if (password.validity.tooLong) {
        passwordError.textContent = 'Password must be between 8 and 12 characters.'
        passwordError.className = 'activeError';
    } else if (passwordConfirmation.validity.tooShort) {
        passwordConfirmationError.textContent = 'Password must be between 8 and 12 characters.'
        passwordConfirmationError.className = 'activeError';
    } else if (passwordConfirmation.validity.tooLong) {
        passwordConfirmationError.textContent = 'Password must be between 8 and 12 characters.'
        passwordConfirmationError.className = 'activeError';
    } else if (passwordConfirmation.value !== password.value) {
        passwordConfirmationError.textContent = 'This must be identical to password.'
        passwordConfirmationError.className = 'activeError';
    }
}