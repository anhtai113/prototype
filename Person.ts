class Person extends Thing {
   constructor(firstName: string,lastName: string, birthDay: Date, weight: number) {
      super();
     	this.table = PersonTable.table;
    	this.setValue(PersonTable.FIRST_NAME, firstName);
    	this.setValue(PersonTable.BIRTH_DAY, birthDay);
    	this.setValue(PersonTable.WEIGHT, weight);
    	this.setValue(PersonTable.LAST_NAME, lastName);
   }
}
