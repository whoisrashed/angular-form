import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, delay, of } from "rxjs";



export class CustomValidator {

    static noWhiteSpace(control: AbstractControl): ValidationErrors | null {

        const value = control.value as string;
        const isWhiteSpace = value.indexOf(' ') >= 0;
        return isWhiteSpace ? { whiteSpace: true } : null;
    }


    static usernameExistAsync(control:AbstractControl) : Promise< ValidationErrors | null> | Observable< ValidationErrors | null>{

        const usersNames = [
            'rashed',
            'r@shed',
            'rash3d'
        ];


        const value = control.value as string;

        const isExist = usersNames.includes(value);

        return isExist? of({userExist:true}).pipe(delay(500)): of(null).pipe(delay(500));

    }
    
}