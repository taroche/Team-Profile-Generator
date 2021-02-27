const Manager = require("../classes/managerClass")

test("Can set office number via constructor", ()=> {
    const testValue = 12
    const example = new Manager (testValue)
    expect(example.officeNum).toBe(testValue)
})