import { isValidPhoneNumber } from "./lib/validPhone.js";

const VALID_PHONE_NUMBER= isValidPhoneNumber("922858969");

console.log(VALID_PHONE_NUMBER);
console.log(VALID_PHONE_NUMBER ?`Número válido:`: "Número inválido");