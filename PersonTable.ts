class PersonTable extends Table {
  	public static FIRST_NAME: Field = new Field("firstName", "firstName", FieldType.STRING);
    public static LAST_NAME: Field = new Field("lastName", "lastName", FieldType.STRING);
  	public static BIRTH_DAY: Field = new Field("birthDay", "birthDay", FieldType.DATE);
  	public static WEIGHT: Field = new Field("weight", "weight", FieldType.NUMBER);
    public static table : PersonTable = new PersonTable();

    private constructor() {
        super("Person", new Array<Field>());
      	this.fields.push(PersonTable.FIRST_NAME);
        this.fields.push(PersonTable.LAST_NAME);
      	this.fields.push(PersonTable.BIRTH_DAY);
      	this.fields.push(PersonTable.WEIGHT);
    }
}
