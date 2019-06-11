const emailValidator = (val) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
}

const isFormValid = (formObj) => {

    let formIsValid = true;

    for (let key in formObj) {

        formIsValid = formObj[key].valid && formIsValid;
    }

    return formIsValid;
}

export const checkValidity = (value, rules, formObj) => {
    let isValid = true;
    let error = null;
    let _required = false;

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;

        if (!isValid) {
            error = "This filed is requierd";
            _required = false;
        } else {
            _required = true;
        }

    }

    if (rules.email) {
        if (_required) {
            isValid = emailValidator(value) && _required && isValid;
            error = !isValid ? "Please enter valid email" : null;
        }
    }

    if (rules.minLength) {
        if (_required) {
            isValid = value.length >= rules.minLength && isValid;
            error = !isValid ? `Minimum ${rules.minLength} characters required` : null;
        }
    }

    if (rules.maxLength) {
        if (_required) {
            isValid = value.length <= rules.maxLength && isValid;
            error = !isValid ? `Maximum ${rules.maxLength} characters exceeded` : null;
        }
    }

    if (rules.matchTo) {
        if (_required) {
            isValid = value === formObj[rules.matchTo].value && isValid;
            error = !isValid ? `Password not matched` : null;
        }
    }

    return {
        valid: isValid,
        error: error
    };
}

export {
    emailValidator,
    isFormValid
};