//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// 1. comment out these two -> items and workItems array and install mongoose
// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

// 2. declare mongoose ==> const mongoose = require("mongoose");

//3. connect to mongoose  ==>
// mongoose.connect("mongodb://localhost:27017/todoListDB", {
//   useNewUrlParser: true,
// });

// mongoose.connect("mongodb://localhost:27017/todoListDB", {
//   useNewUrlParser: true,
// });

//------------
mongoose
  .connect("mongodb://127.0.0.1:27017/todoListDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

//-----------

//4. create a new schema
//method A
//const item = mongoose.model("item", { name: String });
//method B
const itemSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemSchema);

//5. then start adding from the instance of mongoose (also called documents)
const itemA = new Item({ name: "your first item" });
const itemB = new Item({ name: "your second item" });
const itemC = new Item({ name: "your third item" });

const defaultItems = [itemA, itemB, itemC];

// Item.insertMany(defaultItems)
//   .then(function () {
//     console.log("Successfully saved defult items to DB");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
// kitty.save().then(() => console.log("meow"));

//
//
//
//
//
//
// debugger;
//  node --inspect app.js

async function getItems() {
  const Items = await Item.find({});
  return Items;
}

app.get("/", function (req, res) {
  // const day = date.getDate();

  // Item.find({}, function (err, foundItems) {
  //   console.log(foundItems);
  // });
  getItems().then(function (FoundItems) {
    // console.log(FoundItems);
    if (FoundItems.length === 0) {
      Item.insertMany(defaultItems)
        .then(function () {
          console.log("Successfully saved defult items to DB");
        })
        .catch(function (err) {
          console.log(err);
        });
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: FoundItems });
    }
  });

  // res.render("list", { listTitle: "Today", newListItems: ["items", "aaa"] });
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName,
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3019, function () {
  console.log("Server started on port 3019");
});
