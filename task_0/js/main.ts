interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = { firstName: "Alice", lastName: "Smith", age: 20, location: "Paris"};
const student2: Student = { firstName: "Bob", lastName: "Johnson", age: 22, location: "Londres"};;

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = table.createTHead();
const headerRow = thead.insertRow();
const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = "First Name";
headerRow.appendChild(firstNameHeader);

const locationHeader = document.createElement('th');
locationHeader.textContent = "Location";
headerRow.appendChild(locationHeader);

const tbody = table.createTBody();

studentList.forEach(student => {
	const row = tbody.insertRow();
	const firstNameCell = row.insertCell();
	firstNameCell.textContent = student.firstName;

	const locationCell = row.insertCell();
	locationCell.textContent = student.location;
});

document.body.appendChild(table);