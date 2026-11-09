const {workoutreader} = require("../workoutReader.js")
test("reads valid CSV correctly," ,async () => {const result = await workoutreader("data/workouts.csv");
    expect(result.totalworkouts).toBe(10);
    expect(result.totalMinutes).toBe(330)});
    test("handles missing CSV files," ,async()=>{  await expect( workoutreader("data/missing.csv")).rejects.toThrow()});