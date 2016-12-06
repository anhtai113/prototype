class Validation {
   name: string;
   message: string;
   filters: Array<Filter>;
   validate(thing: Thing, field: Field, view: View) : boolean {
       return true;
   }
}
