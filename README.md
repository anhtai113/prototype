This is a set of typescript source files which allow you to build a web application.
All of the application is defined in javascript (you don't write html or css).
The application dynamically writes the html.

See: https://www.typescriptlang.org/ to learn typescript.

To build the javascript files run:

tsc --outFile script/index.js NameValue.ts View.ts AppView.ts ArrayStringFunction.ts Behavior.ts Command.ts Field.ts FieldObjectMap.ts FieldType.ts Filter.ts Html.ts Lov.ts Messages.ts StyleFilter.ts Table.ts TableView.ts Thing.ts UserHistory.ts Validation.ts PersonTable.ts Person.ts

Then view index.html in your browser to see the logic at work.
