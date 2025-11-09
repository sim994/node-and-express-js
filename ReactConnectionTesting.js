const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const user = require("./DataSchema");

const cors = require("cors");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
let corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PATCH,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.set("bufferCommands", false);
mongoose.set("strictQuery", true);

main()
  .then((res) => {
    console.log("connection succefuly");
  })
  .catch((err) => {
    console.log("something went wong");
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/dataForm");
}

const port = 3000;

app.listen(port);

app.get("/count", async (req, res) => {
  try {
    let data = await user.countDocuments()

    let markscount = await user.countDocuments({totalmarks:{$gt:450}})

    let Agreade = await user.countDocuments({totalmarks:{$gte:450}})

    res.status(201).json({ msg: data ,tm:markscount ,ag:Agreade});
  } catch (error) {
    console.error("Error while adding user:", error);
    res.status(500).json({ error: error.message });
  }
});
app.post("/add", async (req, res) => {
  let { fullname, age, grades, totalmarks } = req.body;

  try {
    await user.create({
      fullname,
      age,
      grades,
      totalmarks,
    });

    res.status(201).send({ msg: "Data Submitted Successfully" });
  } catch (error) {
    console.error("Error while adding user:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/show", async (req, res) => {
  try {
    let data = await user.find();

    res.status(201).json(data);
  } catch (error) {
    console.error("Error while adding user:", error);
    res.status(500).json({ error: error.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    let fid = await user.findOneAndDelete({ id: req.params.id });
    if (!fid) {
      return res.status(404).json("Something went wrong");
    }
    res.json({ msg: "Deleted successfully" });
  } catch (error) {
    console.error("Error while adding user:", error);
    res.status(500).json({ error: error.message });
  }
});
