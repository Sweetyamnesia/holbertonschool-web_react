/// import { rowID, rowElement } from './interface.ts'; import * as CRUD from './crud.js';

let row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = insertRow(row);

const updatedRow: RowElement = { ...row, lastName: "Smith" };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);