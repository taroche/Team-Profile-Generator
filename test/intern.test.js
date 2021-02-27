const Intern = require("../classes/internClass")

test("Can set school via constructor", ()=> {
    const testValue = "UNH"
    const example = new Intern (testValue)
    expect(example.school).toBe(testValue)
})