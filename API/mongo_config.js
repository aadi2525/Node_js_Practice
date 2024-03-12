const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'student';
const client = new MongoClient(url);


//connecting the connection and make other fuction to perform the other operation
async function getdata(){
    let result = await client.connect();
    let db = result.db(database);
    return collection = db.collection('data');
    // let resp = await  collection.find({name:'ash'}).toArray();
    // console.log(resp);

}

module.exports = getdata;