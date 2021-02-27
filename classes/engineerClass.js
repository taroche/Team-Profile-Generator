const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, role, githubAcc) {
        super(name, id, email, role);
        this.githubAcc = githubAcc;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer