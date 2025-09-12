import { insertRow } from './crud.js';
import { RowID, RowElement } from './interface.ts';

declare namespace CRUD {
	function insertRow(row: RowElement);
	function deleteRow(id: RowID);
	function updateRow(id: RowID, row: RowElement);
}