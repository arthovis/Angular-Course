export class DemoVariables {
    // string
    name = 'Andrei';
    // int
    age = 36;
    // boolean
    married = true;
    // array
    itCompanies: Array<string> = ['IBM', 'Microsoft', 'Google'];
    brands: string[] = ['Apple', 'Dell', 'HP'];

    public declareVariables(): void {
        console.log(this.itCompanies);

    }
}
