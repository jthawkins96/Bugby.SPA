const requiredValidator = fieldValue => {
    if(fieldValue !== '')
        return true;
    else
        return false;
}

const validatorTypes = {
    required: {
        isValid: requiredValidator,
        errorMessage: 'This field is required.'
    }
}

export default validatorTypes;