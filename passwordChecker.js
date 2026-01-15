function passwordChecker(password) {
    // Règle 1 : Minimum 8 caractères
    if (password.length < 8) {
        return false;
    }

    // Règle 2 : Au moins un caractère spécial
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
        return false;
    }

    // Règle 3 : Au moins un chiffre
    const digitRegex = /[0-9]/;
    if (!digitRegex.test(password)) {
        return false;
    }

    // Règle 4 : Ne pas contenir "IPL" (insensible à la casse)
    if (password.toLowerCase().includes('ipl')) {
        return false;
    }

    return true;
}

module.exports = passwordChecker;