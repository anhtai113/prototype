class TableView extends View {
   headers: Array<ColumnHeaderView>;
   rows: Array<RowView>;

   constructor(name: string, table: Table, things: Array<Thing>, fields: Array<Field>) {
      super(table, things, fields);

      this.name = name;
      this.type = ViewType.TABLE;

      if (this.fields != null) {
          this.headers = new Array<ColumnHeaderView>();
      	  // table headers can be multiple levels
      	  this.headers.push(new ColumnHeaderView(this, 0));
      }

      this.rows = new Array<RowView>();
      if (this.things != null) {
    	  for (let thing of this.things) {
    	     let row = new RowView([ thing ], this);
    	     this.rows.push(row);
    	  }
      }
   }

   public render() {
      this.createElement("table");
      this.element.setAttribute("border", 1);
      if (this.headers != null) {
    	  for (let header of this.headers) {
    	      header.render();
    	  }
      }
      // tables can be split across pages
      // tables can be paginated
      // tables can filter rows and columns
      // tables can sort rows
      // tables can hold trees

      if (this.rows != null) {
    	  for (let row of this.rows) {
    	      row.render();
    	  }
      }

      // tables can have footers
   }
}

class ColumnHeaderView extends View {
  constructor(parent: TableView, headerLevel: number) {
      super(parent.table, []/* things */, parent.fields);
      this.parent = parent;
      this.children = new Array<ColumnView>();
      for (let field of parent.fields) {
      	 let column = new ColumnView([ field ], this);
      	 this.children.push(column);
      }
  }

  public render() {
      this.createElement("tr");
      super.render();
  }
}

class ColumnView extends View {
  constructor(fields: Array<Field>, parent: ColumnHeaderView) {
      super(parent.table, []/* things */, fields);
      this.parent = parent;
  }

  public render() {
      this.createElement("th");
      Html.setTemplate(this.element, this.fields[0].label);
  }
}

class RowView extends View {
  constructor(things: Array<Thing>, parent: TableView) {
      super(parent.table, things, parent.fields);
      this.parent = parent;

      this.children = new Array<CellView>();
      for (let column of parent.headers[0].children) {
       	  let cell = new CellView(this, column as ColumnView);
      	  this.children.push(cell);
      }
  }

  public render() {
      this.createElement("tr");
      super.render();
  }
}

class CellView extends View {
  column: ColumnView;

  constructor(row: RowView, column: ColumnView) {
      super(row.table, row.things, column.fields);
      this.parent = row;
      this.column = column;
  }

  public render() {
      this.createElement("td");
      Html.setValue(this.element, this.things[0].getValue(this.fields[0]));
      // TODO need to listen to changes to the field
      // The field can be a complex view
  }
}
