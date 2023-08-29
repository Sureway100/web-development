import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

debugger;

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

app.get("/weather", (req, res) => {
  // use res.renser instead of sendfile
  // res.sendFile(__dirname + "/views/index.ejs");
  res.render(__dirname + "/views/weather.ejs");
  // res.render("index.ejs", { data: "result" });
});

app.get("/signup", (req, res) => {
  // use res.renser instead of sendfile
  // res.sendFile(__dirname + "/views/index.ejs");
  res.render(__dirname + "/views/signup.ejs");
  // res.render("index.ejs", { data: "result" });
});
app.get("/", (req, res) => {
  // use res.renser instead of sendfile
  // res.sendFile(__dirname + "/views/index.ejs");
  res.render(__dirname + "/views/login.ejs");
  // res.render("index.ejs", { data: "result" });
});

app.post("/cityData", async (req, res) => {
  debugger;
  try {
    console.log(req.body);
    const city = req.body.city;
    console.log(req.body.city);

    const response = await axios.get(
      // `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3bfed66eb7f133ed0a0fed437223448e`
    );
    const result = response.data;

    let navObj = {
      name: result.name,
      mainTemp: result.main.temp,
      minTemp: result.main.temp_min,
      maxTemp: result.main.temp_max,
      country: result.sys.country,
    };
    console.log("tempeerature", navObj);
    res.render("citydata.ejs", {
      data: navObj,
    });
  } catch (error) {
    // console.error("Failed to make request:", error.message);
    res.render("error.ejs", {
      error:
        "No activities that match your criteria, please carefully check your spellings",
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
