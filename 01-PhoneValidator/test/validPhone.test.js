// test/validator.test.js
import { expect } from 'chai';
import { isValidPhoneNumber } from '../lib/validPhone.js';

describe('Validador de número de telefone', function() {
    it('deve retornar falso para números que começam com +244', function() {
        expect(isValidPhoneNumber('+2441234567')).to.be.false;
    });

    it('deve retornar falso para números que começam por 999', function() {
        expect(isValidPhoneNumber('999123456')).to.be.false;
    });

    it('deve retornar falso para números que começam por 900', function() {
        expect(isValidPhoneNumber('900123456')).to.be.false;
    });

    it('deve retornar falso para números que começam por 909', function() {
        expect(isValidPhoneNumber('909123456')).to.be.false;
    });

    it('deve devolver falso para números com mais de 9 caracteres', function() {
        expect(isValidPhoneNumber('9201234567')).to.be.false;
    });

    it('deve retornar falso para números que não começam com  9', function() {
        expect(isValidPhoneNumber('881234567')).to.be.false;
    });

    it('deve retornar verdadeiro para números válidos começando com 92', function() {
        expect(isValidPhoneNumber('920123456')).to.be.true;
    });

    it('deve retornar verdadeiro para números válidos começando com 93', function() {
        expect(isValidPhoneNumber('931234567')).to.be.true;
    });

    it('deve retornar verdadeiro para números válidos começando com 94', function() {
        expect(isValidPhoneNumber('941234567')).to.be.true;
    });

    it('deve retornar verdadeiro para números válidos começando com 91', function() {
        expect(isValidPhoneNumber('911234567')).to.be.true;
    });

    it('deve retornar verdadeiro para números válidos começando com 95', function() {
        expect(isValidPhoneNumber('951234567')).to.be.true;
    });

    it('deve retornar verdadeiro para números válidos começando com 99', function() {
        expect(isValidPhoneNumber('922858969')).to.be.true;
    });
});
