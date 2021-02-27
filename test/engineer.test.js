const Engineer = require("../classes/engineerClass")

test("Can set github via constructor", ()=> {
    const testValue = "awesome"
    const example = new Engineer ("John Doe", 1, "test@gmail.com","engineer", testValue)
    expect(example.githubAcc).toBe(testValue)
})