namespace Subjects {
	export interface Teacher {
		firstName: string;
		lastName: string;
		experienceTeachingC?: number;
		experienceTeachingReact?: number;
		experienceTeachingJava?: number;
	}

	export class Java {
    teacher?: Teacher;

    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingReact) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}