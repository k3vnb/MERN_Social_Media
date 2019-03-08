const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data){
    let errors = {};

    //if  field is blank, we set field to an empty string
    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.from = !isEmpty(data.from) ? data.from : '';




    //validator only tests strings
    if (Validator.isEmpty(data.title)){
        errors.title = 'job title is required';
    }

    if (Validator.isEmpty(data.company)){
        errors.company = 'Company field is required';
    }

    if (Validator.isEmpty(data.from)){
        errors.from = 'From date field is required';
    }



    return {
        errors,
        isValid: isEmpty(errors)
    }
}