import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3009;

// var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// function passwordCheck(req, res, next) {
//   const password = req.body["password"];
//   if (password === "ILoveProgramming") {
//     userIsAuthorised = true;
//   }
//   next();
// }
// app.use(passwordCheck);

// app.get("/", async (req, res) => {
//   try {
//     const response = await axios.get("https://bored-api.appbrewery.com/random");
//     const result = response.data;
//     res.render("index.ejs", { data: result });
//   } catch (error) {
//     console.error("Failed to make request:", error.message);
//     res.render("index.ejs", {
//       error: error.message,
//     });
//   }
// });

app.get("/", (req, res) => {
  // use res.renser instead of sendfile
  // res.sendFile(__dirname + "/views/index.ejs");
  res.render(__dirname + "/views/index.ejs");
  // res.render("index.ejs", { data: "result" });
});

// app.post("/check", (req, res) => {
//   if (userIsAuthorised) {
//     res.sendFile(__dirname + "/public/secret.html");
//   } else {
//     res.sendFile(__dirname + "/public/index.html");
//     //Alternatively res.redirect("/");
//   }
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
