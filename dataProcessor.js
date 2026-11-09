require("dotenv").config()
const { healthmetricscounter } = require("./healthReader.js");


const {workoutreader} = require("./workoutReader.js")
const username = process.env.USER_NAME
const weeklygoal = process.env.WEEKLY_GOAL
async function processdata(params) { const healthCount = await healthmetricscounter("data/health-metrics.json");
    const workoutdata = await workoutreader("data/workouts.csv");
    const totalMinutes = workoutdata.totalMinutes;
    const goalmet = totalMinutes>=weeklygoal;
    console.log(username)
    console.log(weeklygoal)
    console.log(healthCount)
    console.log(goalmet)
    console.log(workoutdata.totalworkouts)
    console.log(totalMinutes)}
    processdata();




    





