
export function isValidPhoneNumber(phoneNumber){
    if(phoneNumber.startsWith('+244') ||phoneNumber.startsWith('999') || phoneNumber.startsWith('900') || phoneNumber.startsWith('909')){
        return false;
    }    
    if (phoneNumber.length > 9 || phoneNumber[0]!='9'){
        return false;
    }
    
    //Verificar se número é válido
    const validNumber= ['92', '93', '94', '91', '95', '99'];
    for (let startWith of validNumber) {
        if (phoneNumber.startsWith(startWith) && phoneNumber.length == 9 ){
            return true;
        }
    }

    return false;

}