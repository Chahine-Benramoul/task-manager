const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = "mongodb://127.0.0.1:27017";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);
async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
async function dataInsert() {
    try {
        // Connect to the "insertDB" database and access its "haiku" collection
        const database = client.db("insertDB");
        const haiku = database.collection("haiku");

        // Create a document to insert
        const doc = {
            title: "Record of a Shriveled Datum",
            content: "No bytes, no problem. Just insert a document, in MongoDB",
        }
        // Insert the defined document into the "haiku" collection
        const result = await haiku.insertOne(doc);
        // Print the ID of the inserted document
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        // Close the MongoDB client connection
        await client.close();
    }
}
async function insertMany() {
    try {
        // Connect to the "insertDB" database and access its "haiku" collection
        const database = client.db("insertDB");
        const haiku = database.collection("haiku");

        // Create a document to insert
        const doc1 = {
            title: "Record of a Shriveled Datum",
            content: "No bytes, no problem. Just insert a document, in MongoDB",
        }
        const doc2 = {
            title: "Record of a Termouma",
            content: "No zouma, no bouma",
        }
        // Insert the defined document into the "haiku" collection
        const result = await haiku.insertMany([doc1,doc2]);
        // Print the ID of the inserted document
        console.log(`Documents inserted with _ids: `);
        const arr = Array(result.insertedIds);
        console.log(arr);
    }catch(error){
        console.log(`Error when inserting documents : ${error}`)
    } finally {
        // Close the MongoDB client connection
        await client.close();
    }
}

async function getDocument(title, time) {
    try {
        const database = client.db('sample_mflix');
        const movies = database.collection('movies');
        // Query for a movie that has the title 'Back to the Future'
        const query = { title };
        const movie = await movies.findOne(query);
        console.log(movie);
    } finally {
        await client.close()
    }
}
async function getAllDocuments(criteria) {
    try {
        const database = client.db('sample_mflix');
        const movies = database.collection('movies');
        // Query for a movie that has the title 'Back to the Future'
        const query = criteria;
        const movie = await movies.find(query).toArray();
        const count = await movies.find(query).count()
        console.log(movie, count);
    } finally {
        await client.close()
    }
}

run().catch(console.dir);
//insertMany().catch(console.dir)
// getDocument('Rapide2').catch(console.dir)
getAllDocuments({time:120}).catch(console.dir)


