import { RowID, RowElement } from './interface.ts';

export function insertRow(row: RowElement);
export function deleteRow(id: RowID);
export function updateRow(id: RowID, row: RowElement);