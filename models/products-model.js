'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
const productSchema = require('./products-schema');


class Products {

  constructor() {
  }

  get(_id) {
    if(_id){
      return productSchema.findOne({_id});
    } else {
      return productSchema.find({});
    }
  }

  create(record) {
    let newRecord = new productSchema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return productSchema.findByIdAndUpdate(_id, record, {new : true});
  }

  delete(_id) {
    return productSchema.findByIdAndDelete(_id);
  }

}

module.exports = Products;