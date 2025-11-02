const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://amandeep954:yDbgzhIreynUdWZX@wanderlust.0y9tx85.mongodb.net/?appName=wanderlust";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
  await initDB();
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6906eca7b7b8a2547e54270f",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
