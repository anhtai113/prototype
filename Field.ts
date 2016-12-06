class Field {
    name: string;
    label: string;
    type: FieldType;
    lov: Lov;
    isArray: boolean;
    format: string;
    subfields: Array<Field>;
    style: Array<StyleFilter>;
    commands: Array<Command>;
    validation: Array<Validation>;
    views: Array<View>;
    constructor(name: string, label: string, type: FieldType) {
      this.name = name;
      this.label = label;
      this.type = type;
    }
}
