const valid = (email, firstName, lastName, password, passwordConfirm) => {
    if(!email || !firstName || !lastName || !password)
    return 'Please add all fields'
    
    if(!validateEmail(email))
    return 'Invalid email'

    if(password.length < 6)
    return 'Password must be at least 6 characters'

    if(password !== passwordConfirm)
    return 'Confirm password did not match'
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export default valid