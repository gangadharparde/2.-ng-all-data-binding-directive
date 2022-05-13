export class Customer {
    constructor(public id: string, public name?: string) {
        this.id = id
        this.name = name;
    }
    public static customers: Customer[] = [
        new Customer('E001', 'John' ),
        new Customer('E002', 'Adam' ),
        new Customer('E003', 'Nick' ),
        new Customer('E004', 'Smith' ),
        new Customer('E005', 'Gd' )
    ];
} 