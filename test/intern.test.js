const Intern = require("../classes/internClass")

test("Can set school via constructor", ()=> {
    const testValue = "UNH"
    const example = new Intern ("John Doe", 1, "test@gmail.com","intern", testValue)
    expect(example.school).toBe(testValue)
})