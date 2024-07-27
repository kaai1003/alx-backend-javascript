import createEmployeesObject from './11-createEmployeesObject.js';

const engineering = ['John Doe', 'Guillaume Salva'];
const marketing = ['Agatha Christie', 'Jason Leverson'];

test('createEmployeesObject returns the correct object', () => {
	const employees = {
		...createEmployeesObject('engineering', engineering),
		...createEmployeesObject('marketing', marketing),
	};

	const holbertonEmployees = {
		engineering,
		marketing,
	};

	expect(employees).toEqual(holbertonEmployees);
});
