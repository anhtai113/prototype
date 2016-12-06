class AppView extends View {
    constructor(name: string, things: Array<Thing>, table: Table, view: View) {
       super(table, things, [] /*fields*/);
       this.type = ViewType.APP;
       this.name = name;
       this.children = new Array<View>();
       this.children.push(view);
       view.parent = this;
       this.element = document.body
    }
}
