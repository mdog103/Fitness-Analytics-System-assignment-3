const fs = require("fs/promises");
async function healthmetricscounter(filepath){ try 
  
    { const data = await fs.readFile(filepath,"utf8");
     const healthdata = JSON.parse(data);
     const totalEntries = healthdata.metrics.length
     console.log(totalEntries)
     return totalEntries
    } 
catch(error){console.error(error)
}}
module.exports = {healthmetricscounter}