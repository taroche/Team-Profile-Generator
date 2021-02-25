class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, githubAcc) {
        super(name, id, email);
        this.githubAcc = githubAcc;
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

module.exports = Manager;
module.exports = Engineer;
module.exports = Intern;