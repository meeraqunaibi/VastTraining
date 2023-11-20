export class Team {
    constructor() {
        this.employeeList = new Array();
    }
    addEmployee(employee) {
        this.employeeList.push(employee);
    }
}