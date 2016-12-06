enum ViewType {
   APP, TABLE, TAB, FORM, SPLIT, GRID, CHART, GRAPH, VIDEO, AUDIO, FIELD, IMAGE, LINK, COMMAND
}
class View {
   name: string;
   type: ViewType;
   table: Table;
   isArray: boolean;
   things: Array<Thing>;
   fields: Array<Field>;
   isModified: boolean;
   parent: View;
   element: any;
   children: Array<View>;
   commands: Array<Command>;
   styles: Array<StyleFilter>;
   behavors: Array<Behavior>;

   constructor(table: Table, things: Array<Thing>, fields: Array<Field>) {
      this.table = table;
      this.things = things;

      if (fields == null || fields.length == 0) {
         fields = table.fields;
      }
      this.fields = fields;
   }

   public render() {
      for (let child of this.children) {
          child.render();
      }
   }

   public createElement(tagName: string) {
      if (this.element == null) {
	 this.element = document.createElement(tagName);
	 this.parent.appendChild(this);
      }
   }

   public appendChild(view: View) {
      this.element.appendChild(view.element);
   }
}
