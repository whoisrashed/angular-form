import { AbstractControl, ValidationErrors } from "@angular/forms";




export class CustomValidator {

    static noWhiteSpace(control: AbstractControl): ValidationErrors | null {

        const value = control.value as string;
        const isWhiteSpace = value.indexOf(' ') >= 0;
        return isWhiteSpace ? { whiteSpace: true } : null;
    }


}