const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'FoodyDb';

// Collection Name
const collectionName = 'food_items';

async function fetchData() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Select the database
    const db = client.db(dbName);

    // Select the collection
    const collection = db.collection(collectionName);

    // Query to fetch data (replace with your own query)
    const query = {};

    // Fetch data from the collection
    const result = await collection.find(query).toArray();

    const collection2=db.collection('food_category');
    const result2=await collection2.find({}).toArray();
    // Output the fetched data
    global.food_items=result;
    global.food_category=result2;
    console.log('Fetched Data:');
    // console.log(result);
  } finally {
    // Close the MongoDB client
    await client.close();
  }
} 

module.exports=fetchData;
// Call the fetchData function

