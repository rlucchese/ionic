import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GenericasService {

  constructor(    public datePipe: DatePipe,
    ) { }
  public validaData(data: Date) {
   console.log(data)
  }

  isValidDate(dateString) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
      return false;

    // Parse the date parts to integers
    let parts = dateString.split("/");
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10);
    let year = parseInt(parts[2], 10);
    //console.log(day, month, year)
    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
      return false;
    //console.log('1')
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
      monthLength[1] = 29;

    // Check the range of the day       
   // console.log('2')

    return day > 0 && day <= monthLength[month - 1];
  };
  ValidaCPF(CPF: string) {
if (CPF){
    let sCPF = CPF.replace(/\./g,'').replace(/\-/g,'').trim()
   // console.log(sCPF.length)
   // console.log(sCPF)

    if ((sCPF.length != 11) || (sCPF == '00000000000')) {
      return false
    }
    else {
     // console.log(sCPF[8])
      let iCalcCPF = +sCPF[8] * 2 +
        +sCPF[7] * 3 +
        +sCPF[6] * 4 +
        +sCPF[5] * 5 +
        +sCPF[4] * 6 +
        +sCPF[3] * 7 +
        +sCPF[2] * 8 +
        +sCPF[1] * 9 +
        +sCPF[0] * 10;

      let iDv01 = 11 - (iCalcCPF % 11);
      if (iDv01 >= 10) {
        iDv01 = 0;
      }
      iCalcCPF = iDv01 * 2 +
        +sCPF[8] * 3 +
        +sCPF[7] * 4 +
        +sCPF[6] * 5 +
        +sCPF[5] * 6 +
        +sCPF[4] * 7 +
        +sCPF[3] * 8 +
        +sCPF[2] * 9 +
        +sCPF[1] * 10 +
        +sCPF[0] * 11;

      let iDv02 = 11 - (iCalcCPF % 11);
      if (iDv02 >= 10) {
        (iDv02 = 0);
      }
     //// console.log(sCPF[9],iDv01.toString().substr(1, 1),iDv02, sCPF[10])
      if ((sCPF[9] == iDv01.toString().substr(0, 1)) && (sCPF[10] == iDv02.toString().substr(0, 1))) {
        return true
      }
      else { return false }

    }
  } else return false
  }

  ValidaCNPJ(sCNPJ: String) {


    let sAux = sCNPJ.replace(/\./g,'').replace(/\-/g,'').replace(/\//g,'').trim()
    let iTamanho = sAux.length;
//console.log(sAux, iTamanho)
    if ((iTamanho = 14) && (sAux != '00000000000000')) {

      let sSemDV = sAux.substr(0, 12);
      let sDVs = sAux.substr(12, 2);
      if ((sAux != '') && (iTamanho = 14)) {
        let sResult1 = this.Mod11(sSemDV,0);
        let sResult2 = this.Mod11(sSemDV + sResult1,0);
       // console.log(sResult1, sResult2, sDVs)
        if (sResult1 + sResult2 == sDVs) {
        //  console.log(true)
          return true
        }
        else {
       //   console.log(false)
          return false
        }
      }
    }
  }

   Mod11(sNumSemDV: string, iResto10: number){
    let iValorAux: number;
let iBase = 9
     sNumSemDV = sNumSemDV.trim();
    let iTamNum = sNumSemDV.length;
    let iSomaDV = 0;
    let iMult = 2;
    let iIndice = iTamNum - 1;

    while (iIndice >= 0 ) {
   
      iValorAux = +sNumSemDV.substr(iIndice, 1) * iMult;
      if (iMult == iBase) {
        iMult = 2}
      else
        iMult++;
      iSomaDV = iSomaDV + iValorAux;
      iIndice--
      }
    let iDV = 11 - (iSomaDV % 11);
  
    if (iDV >= 10) {
      iDV = iResto10;}
  
    return iDV.toString().substr(0,1);
    };
   
  
mod10(iNumSemDV: string)
{
  let iTam: number;
  let iSomaDV: number;
  let iMult: number;
  let iIndice: number;
  let iValorAux: number;
  let iDV: number;
  let iPos: number;

  iTam = iNumSemDV.length;
  iSomaDV = 0;
  iMult = 2;
  iIndice = iTam - 1;
  while (iIndice >= 0) {
    iValorAux = +iNumSemDV.substr(iIndice, 1) * iMult;
    if (iMult == 2) iMult = 1
    else iMult = 2;
    if (iValorAux > 9) iValorAux = iValorAux - 9;

    iSomaDV = iSomaDV + iValorAux;
    iIndice--
  }

  if (iSomaDV > 0) {
    iDV = 10 - (iSomaDV % 10);
    if (iDV == 10) iDV = 0;
  }
  else iDV = 0;

  return iDV.toString();
}


removeDV(Car, Dv: string) {
  let iCar, iDv: number;


  //    iCar := StrToInt(Car);
  //    iDv := StrToInt(Dv);
  iCar = parseInt(Car) + parseInt(Dv);
  if (iCar >= 10)
    iCar = iCar - 10;

  return iCar.toString()

}

formataCampoSaida(valor, tipo, decimais){
if(tipo  == 'date' && valor != null){
if (valor == 'Imediata') {return valor}
else if (valor.substr(8,2) > 0) {return valor.substr(8,2) +'/'+ valor.substr(5,2) +'/'+ valor.substr(0,4)}
else return null
}
  else if (tipo == 'number'){return valor?new Intl.NumberFormat('pt-BR', { currency: 'BRL' , minimumFractionDigits: decimais}).format(+valor):0}
  else return valor
}

removeCaracteres(valor){
if(valor)   return valor.replace(/\./g,'').replace(/\-/g,'').replace(/\//g,'').trim()
else return ''

}

cpfCnpjValidator(): ValidatorFn {

  return (control: FormControl): ValidationErrors | null => {
    if (control.value.toString().length <= 14){
///console.log(this.ValidaCPF(control.value))
    if (this.ValidaCPF(control.value)) return null
    else {
    //  console.log(control.value)
    return { cpfError: true }
  }
}
  else { 
    if (this.ValidaCNPJ(control.value)) return null
    else {//console.log(control.value)
    return { cnpjError: true }}


    }
  }
}




}
