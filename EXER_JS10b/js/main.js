// 1. Store your first name, last name, age, country, and city in your browser localStorage.
localStorage.setItem('FirstName', 'Carlos');
localStorage.setItem('LastName', 'García');
localStorage.setItem('Age', 32);
localStorage.setItem('Country', 'Spain');
localStorage.setItem('City', 'La Nucia');

console.log("1 - My data have been stored in my browser's localStorage: ");
console.log("FirstName:", localStorage.getItem('FirstName'));
console.log("LastName:", localStorage.getItem('LastName'));
console.log("Age:", parseInt(localStorage.getItem('Age')));
console.log("Country:", localStorage.getItem('Country'));
console.log("City:", localStorage.getItem('City'));

// 2. Create a student object and store it in localStorage.
console.log("2 - Next, we create a student object");

const student = {
	firstName: 'Carlos',
	lastName: 'García',
	age: 30,
	skills: ['HTML', 'CSS'],
};

const student_JSONified = JSON.stringify(student);
localStorage.setItem('studentStored', student_JSONified);

// 3. Retrieve the previous student object and display its attributes and skills.
console.log("3 - Next, we retrieve the object from localStorage:");
const studentRetrieved = JSON.parse(localStorage.getItem('studentStored'));
console.log(studentRetrieved);

console.log("Attributes for student retrieved from localStorage showed in different lines:");
console.log("firstName:", studentRetrieved.firstName);
console.log("lastName:", studentRetrieved.lastName);
console.log("age:", studentRetrieved.age);
console.log("skills:");
studentRetrieved.skills.forEach((skill, index) => {
	console.log("Skill " + (index + 1) + ": " + skill);
});
