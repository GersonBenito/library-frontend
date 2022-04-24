export const saveEmailUser = (email) =>{
    localStorage.setItem('email', email);
    return true;
}

export const getEmailUser = () =>{
    const email = localStorage.getItem('email');
    return email;
}

export const removeEmailUser = () =>{
    localStorage.removeItem('email');
    return true;
}