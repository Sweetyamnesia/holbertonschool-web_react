interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience: number;
	location: string;
	[key: string]: string | boolean | number | any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  yearsOfExperience: 15,
};

console.log(teacher3);

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}
function printTeacher(firstName: string, lastName: string) {
	return `${firstName.charAt(0)}. ${lastName}`;
}
