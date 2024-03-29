// Генератор пароля только из чисел
function GPN(lengthPassword) {
    let password = '';

    for (let i = 0; i < lengthPassword; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return password;
}

// Генератор пароля из чисел и букв (оба регистра)

const arrLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function GPNL(lengthPassword) {
    let password = '';

    for (let i = 0; i < lengthPassword; i++) {
        password += arrLetters[Math.floor(Math.random() * arrLetters.length)];
    }
    return password;
}

// Генератор пароля из чисел, букв (оба регистра) и символов

const arrLettersSymbols =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"№%?*@#$^&-+';

function GPNLS(lengthPassword) {
    let password = '';

    for (let i = 0; i < lengthPassword; i++) {
        password += arrLettersSymbols[Math.floor(Math.random() * arrLettersSymbols.length)];
    }
    return password;
}

module.exprots = { GPN, GPNL, GPNLS };

console.log(GPN(8));
console.log(GPNL(8));
console.log(GPNLS(8));