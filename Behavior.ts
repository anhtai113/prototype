class Behavior {
   name: string;
   args: Array<NameValue>;

   table: Table;
   view: View;
   fields: Array<Field>;

   filter: Array<Filter>;
   action() : any { };
}
