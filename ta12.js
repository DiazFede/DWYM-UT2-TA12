function generatePassword(length) {
    if (length < 8) {
        console.log("Password must be at least 8 characters long");
        return;
    }
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(password);
}

generatePassword(12);