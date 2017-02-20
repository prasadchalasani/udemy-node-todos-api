const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect mongodb server', err);
  }
  console.log('Connected to mongodb');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("58aaee2fd728a0241e367ca4")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("58a859cbd7ed8a17089eb1dd")
  }, {
    $set: {
      name: 'Prasad Chalasani'
    },
      $inc: {
        age: 1
      }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })
  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID("58a859cbd7ed8a17089eb1dd")
  // }, {
  //   $inc: {
  //     age: 1
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })
  //db.close();
});
