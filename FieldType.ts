class FieldType {
   name: string;
   type: string;

   static STRING: FieldType = new FieldType("string", "string");
   static DATE: FieldType = new FieldType("date", "date");
   static NUMBER: FieldType = new FieldType("number", "number");
   static ARRAY: FieldType = new FieldType("array", "array");

   constructor(name: string, type: string) {
      this.name = name;
      this.type = type;
   }
}
