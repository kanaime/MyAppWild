import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function rangeDateValidator(min: number, max: number): ValidatorFn {
  return (c: AbstractControl) :{ [key: string]: any } | null => {
    if (!!c.value && (isNaN(c.value) || c.value < min || c.value > max )){
      return { min: { value: c.value, expected: 'between ' +min+ ' and '+ max  }}

    }
    return null;
  }
}

export function isRequiredValidator(control1: string, control2: string): ValidatorFn{
  return(control: AbstractControl) :ValidationErrors | null =>{
    const value1 = control.get(control1)?.value;
    const value2 = control.get(control2)?.value;

    if(value1 == null && value2 == null){
      return { isRequired: {value: '' , expected: value1 + " or "+ value2}}
    } else {
      return null;
    }



  }
}
