export class Employee {

    id: number | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}