import { Human } from './human';
export class Person implements Human {
     firstName = '';
     lastName = '';

    // in constructor merge si fara tip intre ()
    constructor(firstName: string, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // constructor short form
    // constructor(private firstName, private lastName) {}

    public name(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public whoAreYou(): string {
        return `Hi I'm ${this.name()}`;
    }
}
