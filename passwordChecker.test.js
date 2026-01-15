const passwordChecker = require('./passwordChecker');

test('doit retourner false si le mot de passe fait moins de 8 caractères', () => {
    expect(passwordChecker('1234567')).toBe(false);
});

test('doit retourner false si le mot de passe ne contient pas de caractère spécial', () => {
    expect(passwordChecker('MotDePasse123')).toBe(false);
});

test('doit retourner false si le mot de passe ne contient pas de chiffre', () => {
    expect(passwordChecker('MotDePasse!')).toBe(false);
});

test('doit retourner false si le mot de passe contient "IPL" (insensible à la casse)', () => {
    expect(passwordChecker('MotDePasseIPL1!')).toBe(false);
    expect(passwordChecker('motdepasseipl1!')).toBe(false);
});