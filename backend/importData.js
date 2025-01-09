const { MongoClient } = require('mongodb');
const fs = require('fs');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'Dbconnection.js';
const collectionName = 'myCollection'; 

// Read JSON file
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

async function importData() {
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Get the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert data
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents inserted`);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Run the function
importData();
