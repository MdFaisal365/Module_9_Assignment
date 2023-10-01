// Create a new collection:
db.createCollection('collection_name', options);

// Removes a collection from the database:
db.collection_name.drop(); // collection_name === The collection which one you want to remove.


// Inserts a single document into a collection:
db.collection_name.insertOne({
    propertyName: propertyValue
});

// Delete/remove a single document from the collection:
db.collection_name.deleteOne({
    "_id": "_idValue"
})