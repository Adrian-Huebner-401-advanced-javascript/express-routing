'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
const CatSchema = require('./categories-schema');


class Categories {

  constructor() {
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    if(_id){
      return CatSchema.findOne({_id});
    } else {
      return CatSchema.find({});
    }
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    let newRecord = new CatSchema(record);
    return newRecord.save();
  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
    return CatSchema.findByIdAndUpdate(_id, record, {new : true});
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
    return CatSchema.findByIdAndDelete(_id);
  }

}

module.exports = Categories;