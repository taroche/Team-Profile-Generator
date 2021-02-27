const Manager = require("../classes/managerClass")

test("Can set office number via constructor", ()=> {
    const testValue = "12"
    const example = new Manager ("John Doe", 1, "test@gmail.com","manager", testValue)
    expect(example.officeNum).toBe(testValue)
})