const Employee = require("../classes/employee")

test("Can set name via constructor", ()=> {
    const testValue = "Jared"
    const example = new Employee (testValue)
    expect(example.name).toBe(testValue)
})

test("Can set id via constructor", ()=> {
    const testValue = 13
    const example = new Employee ("John Doe", testValue)
    expect(example.id).toBe(testValue)
})

test("Can set email via constructor", ()=> {
    const testValue = "test@gmail.com"
    const example = new Employee ("John Doe", 1 , testValue)
    expect(example.email).toBe(testValue)
})

test("Can set role via constructor", ()=> {
    const testValue = "Manager"
    const example = new Employee ("John Doe", 1, "test@gmail.com",testValue)
    expect(example.role).toBe(testValue)
})
 