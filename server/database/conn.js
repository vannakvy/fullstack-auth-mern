import mongoose from "mongoose";

// import { MongoMemoryServer } from "mongodb-memory-server";
import ENV from "../config.js";

async function connect() {
  // const mongod = await MongoMemoryServer.create();
  // const getUri = mongod.getUri();
  // console.log("htis", getUri);
  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(ENV.ATLAS_URI);
  // const db = await mongoose.connect(getUri);
  console.log(db);
  console.log("Database Connected");
  return db;
}

export default connect;
