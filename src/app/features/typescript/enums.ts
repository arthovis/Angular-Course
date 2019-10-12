import { Role } from './role';
import { Signal } from './signal';

export class DemoEnums {
    // iterate enum
    public iterateEnum(): void {
        console.log('Iterate enum: ');

        for (const role in Role) {
            if (isNaN(Number(role))) {
                console.log(role);
            }
        }
    }

    public getKeysofStringEnum(): void {
        console.log('Iterate keys of string enum: ');
        Object.keys(Signal).forEach(key => console.log(key));
    }

    public iterateEnumKeys() {
        console.log('Iterate enum keys: ');
        Object.keys(Role).filter(key => !isNaN(Number(Role[key]))).forEach(key => console.log(Role[key]));
    }
}
