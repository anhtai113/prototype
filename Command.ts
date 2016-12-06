class Command {
   name: string;
   minSelection: number;
   maxSelection: number;
   filter: Filter;

   table: Table;
   view: View;
   thing: Thing;

   call(): any {}
}
