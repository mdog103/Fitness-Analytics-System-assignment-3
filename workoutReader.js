const fs = require("fs")
  const csv = require("csv-parser")
const { error } = require("console")
  async function workoutreader(filepath) { return new Promise ((resolve,reject) =>{
 const workouts = []
 fs.createReadStream(filepath).on("error",(error) => reject(error)) 
 .pipe(csv())
 .on("data",row =>{workouts.push(row)})
 .on("end",()=>{const totalworkouts = workouts.length;
    let totalMinutes = 0; for(const workout of workouts)
        
      {totalMinutes+= Number(workout.duration)
    } resolve({totalworkouts,totalMinutes}) })
     .on("error",(error)=>{reject(error)})
  })}
module.exports = {workoutreader}

    
   

