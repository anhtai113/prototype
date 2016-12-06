class FieldValue {
   field: Field;
   value: any;
   constructor(field: Field, value: any) {
   	this.field = field;
	this.value = value;
   }
}

class FieldObjectMap {
   values: Array<FieldValue> = new Array<FieldValue>();
   
   // These don't change the undo history
   getValue_(field: Field) : any {
       for (let value of this.values) {
          if (value.field == field) {
	     return value.value;
	  }
       }
       return null;
   }
   setValue_(field: Field, value: any) : any {
       for (let value of this.values) {
          if (value.field == field) {
	     var old = value.value;
	     value.value = value;
	     return old;
	  }
       }
       this.values.push(new FieldValue(field, value));
       return null;
   }

   // These do change the undo history
   getValue(field: Field) : any {
       return this.getValue_(field);
   }
   setValue(field: Field, value: any) : any {
       return this.setValue_(field, value);
   }
}
