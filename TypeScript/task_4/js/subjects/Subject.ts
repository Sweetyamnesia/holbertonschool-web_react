namespace Subjects {
  namespace Subjects {
	export class Subject {
		_teacher: Teacher;

		constructor(teacher: Teacher) {
		this._teacher = teacher;
		}

		get teacher(): Teacher {
		return this._teacher;
		}

		setTeacher(teacher: Teacher): void {
		this._teacher = teacher;
		}
	}
	}
}