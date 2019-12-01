import validatorTypes from './validatorTypes';

const validate = inputFields => {
    const validationObject = { isValid: true };

    for(let key in inputFields) {
        const field = inputFields[key];
        const fieldValue = field.current.value;
        const fieldValidators = field.current.attributes.validators.value;

        const validatedField = validateField(fieldValue, fieldValidators);
        validationObject[key] = validatedField;

        if(!validatedField.isValid)
            validationObject.isValid = false;
    }

    return validationObject;
}

const validateField = (fieldValue, fieldValidators) => {
    const validatedField = generateValidationField();

    fieldValidators.split(',').forEach(validatorType => {
        const validator = validatorTypes[validatorType];

        validatedField.isValid = validator.isValid(fieldValue);

        if(!validatedField.isValid) {
            validatedField.errorMessage = validator.errorMessage;
            return validatedField;
        }
    });

    return validatedField;
}

const generateValidationObject = inputFields => {
    const validationObject = {};

    for(let key in inputFields) {
        validationObject[key] = generateValidationField();
    }

    return validationObject;
}

const generateValidationField = () => {
    return {
        errorMessage: '',
        isValid: true
    }
}

const formValidator = {
    validate,
    generateValidationObject
}

export const validationTypes = {
    required: 'required'
}

export default formValidator;