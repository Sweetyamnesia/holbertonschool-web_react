interface OrderMajorCredits {
	credits: number;
	__brand: 'MajorCredits';
}

interface OrderMinorCredits {
	credits: number;
	__brand: 'MinorCredits';
}

function sumMajorCredits (subject1: OrderMajorCredits, subject2: OrderMajorCredits) {
	return  subject1.credits + subject2.credits;
}

function sumMinorCredits (subject1: OrderMinorCredits, subject2: OrderMinorCredits) {
	return subject1.credits + subject2.credits;
}