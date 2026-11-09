const {healthmetricscounter} = require("../healthReader.js")
test("counts health metrics correctly",async()=>{
    const result = await healthmetricscounter("data/health-metrics.json")
expect (result).toBe(8)})
test("handles missing JSON files",async()=>{
    const result = await healthmetricscounter("data/missing.json")
    expect (result).toBeUndefined()
});

