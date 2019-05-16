const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://s_julia99:210799j@cluster0-324pb.azure.mongodb.net/test?retryWrites=true"

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {

  const collection = client.db("test").collection("recruitment_agency");

  // perform actions on the collection object

  client.close();

});

1.Відповідно до обраної теми індивідуально завдання створити приклади для додавання даних до колекцій, зміни даних та видалення

  collection.insertOne({"name":"recruitment_agency1"});
  collection.insertOne({"name":"recruitment_agency2"});
  collection.deleteOne({"name":"recruitment_agency1"});
  collection.updateOne(
      {"name":"recruitment_agency2"},
      {$set: {"name":"recruitment_agency3"}}
  );
  collection
  .find()
  .toArray(function (err, res) {
    console.log(res);
  });

  client.close();
});
