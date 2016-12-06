var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NameValue = (function () {
    function NameValue(name, value) {
        this.name = name;
        this.value = value;
    }
    return NameValue;
}());
var ViewType;
(function (ViewType) {
    ViewType[ViewType["APP"] = 0] = "APP";
    ViewType[ViewType["TABLE"] = 1] = "TABLE";
    ViewType[ViewType["TAB"] = 2] = "TAB";
    ViewType[ViewType["FORM"] = 3] = "FORM";
    ViewType[ViewType["SPLIT"] = 4] = "SPLIT";
    ViewType[ViewType["GRID"] = 5] = "GRID";
    ViewType[ViewType["CHART"] = 6] = "CHART";
    ViewType[ViewType["GRAPH"] = 7] = "GRAPH";
    ViewType[ViewType["VIDEO"] = 8] = "VIDEO";
    ViewType[ViewType["AUDIO"] = 9] = "AUDIO";
    ViewType[ViewType["FIELD"] = 10] = "FIELD";
    ViewType[ViewType["IMAGE"] = 11] = "IMAGE";
    ViewType[ViewType["LINK"] = 12] = "LINK";
    ViewType[ViewType["COMMAND"] = 13] = "COMMAND";
})(ViewType || (ViewType = {}));
var View = (function () {
    function View(table, things, fields) {
        this.table = table;
        this.things = things;
        if (fields == null || fields.length == 0) {
            fields = table.fields;
        }
        this.fields = fields;
    }
    View.prototype.render = function () {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.render();
        }
    };
    View.prototype.createElement = function (tagName) {
        if (this.element == null) {
            this.element = document.createElement(tagName);
            this.parent.appendChild(this);
        }
    };
    View.prototype.appendChild = function (view) {
        this.element.appendChild(view.element);
    };
    return View;
}());
var AppView = (function (_super) {
    __extends(AppView, _super);
    function AppView(name, things, table, view) {
        _super.call(this, table, things, [] /*fields*/);
        this.type = ViewType.APP;
        this.name = name;
        this.children = new Array();
        this.children.push(view);
        view.parent = this;
        this.element = document.body;
    }
    return AppView;
}(View));
var Behavior = (function () {
    function Behavior() {
    }
    Behavior.prototype.action = function () { };
    ;
    return Behavior;
}());
var Command = (function () {
    function Command() {
    }
    Command.prototype.call = function () { };
    return Command;
}());
var Field = (function () {
    function Field(name, label, type) {
        this.name = name;
        this.label = label;
        this.type = type;
    }
    return Field;
}());
var FieldValue = (function () {
    function FieldValue(field, value) {
        this.field = field;
        this.value = value;
    }
    return FieldValue;
}());
var FieldObjectMap = (function () {
    function FieldObjectMap() {
        this.values = new Array();
    }
    // These don't change the undo history
    FieldObjectMap.prototype.getValue_ = function (field) {
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.field == field) {
                return value.value;
            }
        }
        return null;
    };
    FieldObjectMap.prototype.setValue_ = function (field, value) {
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var value_1 = _a[_i];
            if (value_1.field == field) {
                var old = value_1.value;
                value_1.value = value_1;
                return old;
            }
        }
        this.values.push(new FieldValue(field, value));
        return null;
    };
    // These do change the undo history
    FieldObjectMap.prototype.getValue = function (field) {
        return this.getValue_(field);
    };
    FieldObjectMap.prototype.setValue = function (field, value) {
        return this.setValue_(field, value);
    };
    return FieldObjectMap;
}());
var FieldType = (function () {
    function FieldType(name, type) {
        this.name = name;
        this.type = type;
    }
    FieldType.STRING = new FieldType("string", "string");
    FieldType.DATE = new FieldType("date", "date");
    FieldType.NUMBER = new FieldType("number", "number");
    FieldType.ARRAY = new FieldType("array", "array");
    return FieldType;
}());
var FilterOp;
(function (FilterOp) {
    FilterOp[FilterOp["EQ"] = 0] = "EQ";
    FilterOp[FilterOp["NEQ"] = 1] = "NEQ";
    FilterOp[FilterOp["LT"] = 2] = "LT";
    FilterOp[FilterOp["LTE"] = 3] = "LTE";
    FilterOp[FilterOp["GT"] = 4] = "GT";
    FilterOp[FilterOp["GTE"] = 5] = "GTE";
    FilterOp[FilterOp["AND"] = 6] = "AND";
    FilterOp[FilterOp["OR"] = 7] = "OR";
    FilterOp[FilterOp["NOT"] = 8] = "NOT";
})(FilterOp || (FilterOp = {}));
var Filter = (function () {
    function Filter() {
    }
    return Filter;
}());
var Html = (function () {
    function Html() {
    }
    // TODO need to pass the context for the template
    Html.setTemplate = function (element, template) {
        // TODO More work needed here
        element.appendChild(document.createTextNode(Messages.getMessage(template)));
    };
    Html.setValue = function (element, value) {
        // TODO More work needed here
        if (value != null) {
            // need to convert value to a string! could be any array, etc.
            element.appendChild(document.createTextNode(value.toString()));
        }
    };
    return Html;
}());
var Lov = (function () {
    function Lov() {
    }
    return Lov;
}());
var Language;
(function (Language) {
    Language[Language["EN_US"] = 0] = "EN_US";
    Language[Language["VN"] = 1] = "VN";
})(Language || (Language = {}));
var LanguageMessages = (function () {
    function LanguageMessages(language, strings) {
        this.language = Language.EN_US;
        this.strings = new Array();
        this.language = language;
        this.strings = strings;
    }
    ;
    LanguageMessages.prototype.getMessage = function (key) {
        for (var _i = 0, _a = this.strings; _i < _a.length; _i++) {
            var nv = _a[_i];
            if (nv.name == key) {
                return nv.value;
            }
        }
        return key;
    };
    return LanguageMessages;
}());
var defaultLanguage = Language.EN_US;
var enUsStrings = new Array();
enUsStrings.push(new NameValue("firstName", "First Name"));
enUsStrings.push(new NameValue("lastName", "Last Name"));
enUsStrings.push(new NameValue("birthDay", "Birth Day"));
enUsStrings.push(new NameValue("weight", "Weight"));
var enUsMessages = new LanguageMessages(Language.EN_US, enUsStrings);
var vnStrings = new Array();
vnStrings.push(new NameValue("test", "Test"));
var vnMessages = new LanguageMessages(Language.VN, enUsStrings);
var Messages = (function () {
    function Messages() {
    }
    Messages.getMessage = function (key) {
        if (defaultLanguage == Language.VN) {
            return vnMessages.getMessage(key);
        }
        return enUsMessages.getMessage(key);
    };
    ;
    return Messages;
}());
var StyleFilter = (function () {
    function StyleFilter() {
    }
    return StyleFilter;
}());
var Table = (function () {
    function Table(name, fields) {
        this.name = name;
        this.fields = fields;
    }
    return Table;
}());
var TableView = (function (_super) {
    __extends(TableView, _super);
    function TableView(name, table, things, fields) {
        _super.call(this, table, things, fields);
        this.name = name;
        this.type = ViewType.TABLE;
        if (this.fields != null) {
            this.headers = new Array();
            // table headers can be multiple levels
            this.headers.push(new ColumnHeaderView(this, 0));
        }
        this.rows = new Array();
        if (this.things != null) {
            for (var _i = 0, _a = this.things; _i < _a.length; _i++) {
                var thing = _a[_i];
                var row = new RowView([thing], this);
                this.rows.push(row);
            }
        }
    }
    TableView.prototype.render = function () {
        this.createElement("table");
        this.element.setAttribute("border", 1);
        if (this.headers != null) {
            for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                header.render();
            }
        }
        // tables can be split across pages
        // tables can be paginated
        // tables can filter rows and columns
        // tables can sort rows
        // tables can hold trees
        if (this.rows != null) {
            for (var _b = 0, _c = this.rows; _b < _c.length; _b++) {
                var row = _c[_b];
                row.render();
            }
        }
        // tables can have footers
    };
    return TableView;
}(View));
var ColumnHeaderView = (function (_super) {
    __extends(ColumnHeaderView, _super);
    function ColumnHeaderView(parent, headerLevel) {
        _super.call(this, parent.table, [] /* things */, parent.fields);
        this.parent = parent;
        this.children = new Array();
        for (var _i = 0, _a = parent.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            var column = new ColumnView([field], this);
            this.children.push(column);
        }
    }
    ColumnHeaderView.prototype.render = function () {
        this.createElement("tr");
        _super.prototype.render.call(this);
    };
    return ColumnHeaderView;
}(View));
var ColumnView = (function (_super) {
    __extends(ColumnView, _super);
    function ColumnView(fields, parent) {
        _super.call(this, parent.table, [] /* things */, fields);
        this.parent = parent;
    }
    ColumnView.prototype.render = function () {
        this.createElement("th");
        Html.setTemplate(this.element, this.fields[0].label);
    };
    return ColumnView;
}(View));
var RowView = (function (_super) {
    __extends(RowView, _super);
    function RowView(things, parent) {
        _super.call(this, parent.table, things, parent.fields);
        this.parent = parent;
        this.children = new Array();
        for (var _i = 0, _a = parent.headers[0].children; _i < _a.length; _i++) {
            var column = _a[_i];
            var cell = new CellView(this, column);
            this.children.push(cell);
        }
    }
    RowView.prototype.render = function () {
        this.createElement("tr");
        _super.prototype.render.call(this);
    };
    return RowView;
}(View));
var CellView = (function (_super) {
    __extends(CellView, _super);
    function CellView(row, column) {
        _super.call(this, row.table, row.things, column.fields);
        this.parent = row;
        this.column = column;
    }
    CellView.prototype.render = function () {
        this.createElement("td");
        Html.setValue(this.element, this.things[0].getValue(this.fields[0]));
        // TODO need to listen to changes to the field
        // The field can be a complex view
    };
    return CellView;
}(View));
var Thing = (function () {
    function Thing() {
        this.values = new FieldObjectMap();
    }
    // These don't change the undo history
    Thing.prototype.getValue_ = function (field) {
        return this.values.getValue_(field);
    };
    Thing.prototype.setValue_ = function (field, value) {
        return this.values.setValue_(field, value);
    };
    // These do change the undo history
    Thing.prototype.getValue = function (field) {
        return this.values.getValue(field);
    };
    Thing.prototype.setValue = function (field, value) {
        return this.values.setValue(field, value);
    };
    return Thing;
}());
var UserHistory = (function () {
    function UserHistory() {
    }
    return UserHistory;
}());
var Validation = (function () {
    function Validation() {
    }
    Validation.prototype.validate = function (thing, field, view) {
        return true;
    };
    return Validation;
}());
var PersonTable = (function (_super) {
    __extends(PersonTable, _super);
    function PersonTable() {
        _super.call(this, "Person", new Array());
        this.fields.push(PersonTable.FIRST_NAME);
        this.fields.push(PersonTable.LAST_NAME);
        this.fields.push(PersonTable.BIRTH_DAY);
        this.fields.push(PersonTable.WEIGHT);
    }
    PersonTable.FIRST_NAME = new Field("firstName", "firstName", FieldType.STRING);
    PersonTable.LAST_NAME = new Field("lastName", "lastName", FieldType.STRING);
    PersonTable.BIRTH_DAY = new Field("birthDay", "birthDay", FieldType.DATE);
    PersonTable.WEIGHT = new Field("weight", "weight", FieldType.NUMBER);
    PersonTable.table = new PersonTable();
    return PersonTable;
}(Table));
var Person = (function (_super) {
    __extends(Person, _super);
    function Person(firstName,lastName, birthDay, weight) {
        _super.call(this);
        this.table = PersonTable.table;
        this.setValue(PersonTable.FIRST_NAME, firstName);
        this.setValue(PersonTable.LAST_NAME, lastName);
        this.setValue(PersonTable.BIRTH_DAY, birthDay);
        this.setValue(PersonTable.WEIGHT, weight);
    }
    return Person;
}(Thing));
