class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email
        this.role = role
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

class Manager extends Employee {
    constructor(name, id, email, role, officeNum) {
        super(name, id, email, role);
        this.officeNum = officeNum;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, role, githubAcc) {
        super(name, id, email);
        this.githubAcc = githubAcc;
    }
    getGithub() {
        return this.github;
    }
}

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Manager;
module.exports = Engineer;
module.exports = Intern;