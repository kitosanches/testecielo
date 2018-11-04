export class Validator {
    validarCPF(strCPF) {
        let cpf: string;
        cpf = strCPF;
        cpf = cpf.replace('.', '');
        cpf = cpf.replace('.', '');
        cpf = cpf.replace('-', '');
        let soma;
        let resto;
        soma = 0;

        if (cpf === '00000000000' ||
            cpf === '11111111111' ||
            cpf === '22222222222' ||
            cpf === '33333333333' ||
            cpf === '44444444444' ||
            cpf === '55555555555' ||
            cpf === '66666666666' ||
            cpf === '77777777777' ||
            cpf === '88888888888' ||
            cpf === '99999999999') {
            return false;
        }
        for (let i = 1; i <= 9; i++) {
            soma += (+cpf.substring(i - 1, i) * (11 - i));
        }
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto !== +cpf.substring(9, 10)) {
            return false;
        }
        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma += (+cpf.substring(i - 1, i) * (12 - i));
        }

        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto !== +cpf.substring(10, 11)) {
            return false;
        }
        return true;
    }

    validarCNPJ(c) {
        console.log(c);
        const b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        if ((c = c.replace(/[^\d]/g, '')).length !== 14) {
            return false;
        }
        if (/0{14}/.test(c)) {
            return false;
        }
        if (
            c === '00000000000000' ||
            c === '11111111111111' ||
            c === '22222222222222' ||
            c === '33333333333333' ||
            c === '44444444444444' ||
            c === '55555555555555' ||
            c === '66666666666666' ||
            c === '77777777777777' ||
            c === '88888888888888' ||
            c === '99999999999999') {
            return false;
        }
        let n = 0;
        for (let j = 0; j < 2; ++j) {
            for (let i; i < 12 + j; n += c[i] * b[++i - j]) {
                if (c[12 + j] !== ((n %= 11) < 2) ? 0 : 11 - n) {
                    return false;
                }
            }
        }
        return true;
    }
}
