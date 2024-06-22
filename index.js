import app from "./Review-backend/server.js";
import mongodb from "mongodb";
import ReviewsDAO from "./Review-backend/dao/reviewsDAO.js";
import dotenv from 'dotenv';

dotenv.config();

console.log("Mongo Username:", process.env.MONGO_USERNAME);
console.log("Mongo Password:", process.env.MONGO_PASSWORD);

const MongoClient = mongodb.MongoClient;
const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.jhyvrri.mongodb.net/reviews?retryWrites=true&w=majority`;


const port = process.env.PORT || 8001;

MongoClient.connect(
  uri,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
  }
)
.catch(err => {
  console.error(err.stack);
  process.exit(1);
})
.then(async client => {
  await ReviewsDAO.injectDB(client);
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
