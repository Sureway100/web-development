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

// app.post("/check", (req, res) => {
//   if (userIsAuthorised) {
//     res.sendFile(__dirname + "/public/secret.html");
//   } else {
//     res.sendFile(__dirname + "/public/index.html");
//     //Alternatively res.redirect("/");
//   }
// });

// app.get("/", async (req, res) => {
//   try {
//     const response = await axios.get("https://bored-api.appbrewery.com/random");
//     const result = response.data;
//     console.log(result);
//     res.render("solution.ejs", { data: result });
//   } catch (error) {
//     console.error("Failed to make request:", error.message);
//     res.render("solution.ejs", {
//       error: error.message,
//     });
//   }
// });

app.post("/cityData", async (req, res) => {
  try {
    console.log(req.body);
    const city = req.body.city;
    console.log(req.body.city);
    const response = await axios.get(
      // `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3bfed66eb7f133ed0a0fed437223448e`
    );
    const result = response.data;
    console.log("everything here", result);
    console.log("name", result.name);
    console.log("tempeerature", result.main.temp);
    res.render("weather.ejs", {
      // data: result[Math.floor(Math.random() * result.length)],
      data: result,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    // res.render("weather.ejs", {
    //   error: "No activities that match your criteria.",
    // });
  }
});

// class WeatherService {
//   Future<WeatherModel> getWeather(String city) async {
//     //https://api.openweathermap.org/data/2.5/weather?lat=6.4550575&lon=3.3941795&appid=3bfed66eb7f133ed0a0fed437223448e
//     //https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=3bfed66eb7f133ed0a0fed437223448e

//     final queryParams = {
//       'q': city,
//       'units': 'metric',
//       'appid': '',
//     };
//     // final queryParams = {
//     //   'lat': '6.4550575',
//     //   'lon': '3.3941795',
//     //   'units': 'metric',
//     //   'appid': '',
//     // };

//     // final getUri =
//     //     Uri.https('api.openweathermap.org', '/data/2.5/weather', queryParams);
//     // print(getUri);

//     final getUri =
//         Uri.https('api.openweathermap.org', '/data/2.5/weather', queryParams);

//     final response = await http.get(getUri);

//     print(' api is waiting');

//     print(response.body);

//     final json = jsonDecode(response.body);
//     return WeatherModel.fromJson(json);
//   }
// }

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
