const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);

validatePIN('1234'); // true
validatePIN('12345'); // false
validatePIN('a234'); // false
