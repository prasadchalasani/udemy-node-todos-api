const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect mongodb server', err);
  }
  console.log('Connected to mongodb');

  db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  db.collection('Users').find({name: 'Prasad'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });

  db.collection('Users').find().count().then((count) => {
    console.log(`Users count : ${count}`);

  }, (err) => {
    console.log('Unable to fetch Users count', err);
  });

  //db.close();
});
