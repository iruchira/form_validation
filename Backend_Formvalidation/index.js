
const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const dataFile = require("./userData.json");
const bcrypt = require("bcryptjs");

app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const setRounds = 10;


//read the json file //
const readFile = () => {
  const jsonData = fs.readFileSync("./userData.json");
  return JSON.parse(jsonData);
}
//post request for registration form//
app.post('/user', (req, res) => {
  const userDetails = readFile();
  if (userDetails.length >= 0) {
    let detailsObj = {
      "fname": req.body.fname,
      "email_id": req.body.email_id,
      "password": bcrypt.hashSync(req.body.password, setRounds), //convert plain text password to hash using bcrypt//
      "notes": req.body.notes,
      "id": uuid()
    }

   const existingUser = userDetails.find (user =>user.email_id === detailsObj.email_id)
   if(existingUser){
    return res.status (404).send({error:true, msg: "user already exist"});
   }else {
    dataFile.push(detailsObj);
    fs.writeFile("./userData.json", JSON.stringify(dataFile), (error) => {
      if (error) {
        res.send("wrong input");//conflict
      }
      else {
        res.send(detailsObj);
      }
    });
   }
  }
});

//  get the user details for registration //
app.get("/user", (req, res) => {
  const userDetails = readFile();
  res.send(userDetails);
});

// post for login//
app.post("/login", (req, res) => {
const userDetails = readFile();
const detailsObj =req.body;
const existingUser = userDetails.find((user)=> user .email_id === detailsObj.email_id && bcrypt.compareSync (detailsObj.password , user.password));
if (existingUser){
  return res.status(200).send ({sucess :true, msg: "login sucessfully"});
}else {
  res.status(404).send({ error: true, msg: 'userId or password are not matching' })
}
});

app.listen(3000, () => console.log("API server is running....."));