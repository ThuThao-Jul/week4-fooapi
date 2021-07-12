const express = require("express");
const logger = require("morgan");
const app = express();
const port = 5000;

const data=require("./data.json")
app.use(logger("dev"));


require("dotenv").config();
const cors = require("cors");

app.use(cors());


//1
// app.get("/jobs", (req, res) => {
//     let jobs = data.companies.splice(0,20)
//     res.send(jobs);
//   });

  
// 2,3,4
//   app.get("/jobs", (req, res) => {
//     const {page} = rep.query.page
//     let offset = page*20
//     let jobs = data.companies.splice((page-1)*20, offset+1)
//     res.send(jobs);
//   });


//5

// app.get("/jobs", (req, res) => {
//     console.log(req.query)
//  const companyName = req.query.companyName
//  let jobCompanyName= data.companies.filter((j) => j.name==companyName)
//     res.send(jobCompanyName);
//   });

//6
// app.get("/jobs", (req, res) => {
//         console.log(req.query)
//      const title = req.query.title
//      let jobTitle= data.jobs.filter((j) => j.title.includes(title))
//         res.send(jobTitle);
//       });



//7
// app.get("/jobs", (req, res) => {
//     console.log(req.query)
//  const city = req.query.city
//  let filteredJobs= data.jobs.filter((j) => j.city==city)
//     res.send(filteredJobs);
//   });


//10
// app.delete("/jobs/:id", (req, res) => {
//      const id = req.params
//      console.log(id)
//     //  let filteredJobs= data.jobs.filter((j) => j.city==city)
//         res.send("cwcq");
//       });




app.listen(port, () => {
    
    console.log(`Example app listening at http://localhost:${port}`);
  });


  app.use((req, res, next) => {
    const error = new Error("Resource Not Found");
    error.statusCode = 404;
    next(error);
  });
  
  function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(err.statusCode || 500);
    res.send(err.message);
  }
  
  app.use(errorHandler);
  
  app.use(cors());