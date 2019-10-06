require("dotenv").config()
const express = require("express");
const {submit} = require("./formController");
const massive = require("massive");
//

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("DB connected");
});

app.use(express.json());


// ---
app.post("/api/form/submit", submit)

app.listen(5001, () => console.log("listening on 5001"));
