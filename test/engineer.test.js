const Engineer = require("../classes/engineerClass")

test("Can set github via constructor", ()=> {
    const testValue = "awesome"
    const example = new Engineer (testValue)
    expect(example.githubAcc).toBe(testValue)
})