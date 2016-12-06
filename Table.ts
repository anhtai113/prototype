class Table {
    name: string;
    fields: Array<Field>;
    baseTable: Array<Table>;
    viewTable: Array<Table>;
    views: Array<View>;
    style: Array<StyleFilter>;
    commands: Array<Command>;
    constructor(name: string, fields: Array<Field>) {
      this.name = name;
      this.fields = fields;
    }
}
