class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email
        this.role = role
    }
}

class Manager extends Employee {
    constructor(name, id, email, role, officeNum) {
        super(name, id, email, role);
        this.officeNum = officeNum;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, role, githubAcc) {
        super(name, id, email);
        this.githubAcc = githubAcc;
    }
}

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }
}

module.exports = Manager;
module.exports = Engineer;
module.exports = Intern;