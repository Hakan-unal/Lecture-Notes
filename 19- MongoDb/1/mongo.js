const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb+srv://Hakan-unal:XrBDTYFNMOaMtLhA@hakan-db-q02p3.mongodb.net/test?retryWrites=true&w=majority';
dbName = 'deneme';

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('unsucces' + error);
    }
    /*
    const db = client.db(dbName);
    db.collection('users').insertOne({
        name: 'Tuagy',
        surname: 'ÜNAL',
        age: 24,
        mail: 'adfafa@aaf'
    }, (err, result) => {
        if (err) {
            return console.log(err);
        } console.log(result.ops);
    });
    */

    /*
     const db = client.db(dbName);
     db.collection('personels').insertMany([
         {
             description: 'description',
             current: true
         },
         {
             description: 'description1',
             current: true
         },
         {
             description: 'description1',
             current: false
         }
     ], (err, result) => {
         if (err) {
             return console.log(err)
         }
         console.log(result.ops);
     })
     */
    /*
    const db = client.db(dbName);
    db.collection('users').findOne({
        age: 24
    }, (err, user) => {
        if (err) {
            return console.log(err);
        }console.log(user);
    });
    */
    /*
     const db = client.db(dbName);
     db.collection('users').find({ age: 24 }).toArray((err, users) => {
         if (err) {
             return console.log(err);
         }
         console.log(users);
     });
     db.collection('users').insertOne({
         title: "title",
         choice: "choice",
         array: {
             name: "name",
             surname: "surname"
         }
     }).then((result) => {
         console.log(result.ops);
     }).catch((err) => {
         console.log(err);
     });
 
     db.collection('users').find({ age: 24 }).count((err, count) => {
         if (err) {
             return console.log(err);
         }
         console.log(count);
     });
 */
    const db = client.db(dbName);

    db.collection('users').findOne({
        title: 'title'
    }, (err, user) => {
        if (err) {
            return console.log(err);
        } console.log(user);
    });

});