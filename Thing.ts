class Thing {
  lid: string;
  gid: string;

  created: Date;
  createdBy: Date;

  modified: Date;
  modifiedBy: Date;

  table: Table;
  values: FieldObjectMap = new FieldObjectMap();

  parent: Thing;
  parentField: Field;
  parentIdx: number;

  history: Array<History>;


   // These don't change the undo history
   getValue_(field: Field) : any {
       return this.values.getValue_(field);
   }
   setValue_(field: Field, value: any) : any {
       return this.values.setValue_(field, value);
   }

   // These do change the undo history
   getValue(field: Field) : any {
       return this.values.getValue(field);
   }
   setValue(field: Field, value: any) : any {
       return this.values.setValue(field, value);
   }
}
