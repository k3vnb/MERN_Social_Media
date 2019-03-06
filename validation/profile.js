const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data){
    let errors = {};

    //if  field is blank, we set field to an empty string
    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';



    //validator only tests strings
    if (!Validator.isLength(data.handle, { min: 2, max: 40 })){
        errors.handle = 'Handle needs to be between 2 and 40 characters';
    }

    if (Validator.isEmpty(data.handle)){
        errors.handle = 'Profile handle is required';
    }

    if (Validator.isEmpty(data.status)){
        errors.status = 'Status Field is required';
    }

    if (Validator.isEmpty(data.skills)){
        errors.skills = 'Skills Field is required';
    }

    // Run website field thru our custom isEmpty function to see if it exists
    if (!isEmpty(data.website)){
        // if it exists, run the URL thru Validator
        if (!Validator.isURL(data.website)){
            errors.website = "Not a valid URL";
        }
    }

    if (!isEmpty(data.youtube)){
        // if it exists, run the URL thru Validator
        if (!Validator.isURL(data.youtube)){
            errors.youtube = "Not a valid URL";
        }
    }

    if (!isEmpty(data.twitter)){
        // if it exists, run the URL thru Validator
        if (!Validator.isURL(data.twitter)){
            errors.twitter = "Not a valid URL";
        }
    }

    if (!isEmpty(data.facebook)){
        // if it exists, run the URL thru Validator
        if (!Validator.isURL(data.facebook)){
            errors.facebook = "Not a valid URL";
        }
    }

    if (!isEmpty(data.linkedin)){
        // if it exists, run the URL thru Validator
        if (!Validator.isURL(data.linkedin)){
            errors.linkedin = "Not a valid URL";
        }
    }

    if (!isEmpty(data.instagram)){
        // if it exists, run the URL thru Validator
        if (!Validator.isURL(data.instagram)){
            errors.instagram = "Not a valid URL";
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}