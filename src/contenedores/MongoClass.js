import mongoose from "mongoose";
import config from '../config.js'

mongoose.connect(config.mongoDB.URL, config.mongoDB.options);

class MongoClass {
  constructor(collectionName, docSchema) {
    this.collection = mongoose.model(collectionName, docSchema);
  }

  //OK
  async getAll() {
    try {
      const allItems = await this.collection.find({});
      return allItems;
    } catch (error) {
      console.log("error:", error);
    }
  }
  
  async create(obj) {
    try {
      const newItem = await this.collection.create(obj);
      return newItem;

    } catch (error) {
      console.log("error:", error);
    }
  }
 //NO
  async findById(id) {
    try {
      const findItemId = await this.collection.findById({_id:id})
      return findItemId

    } catch (error) {
      console.log("Error:", error)
    }
    
  }

  async update(id) {
    try {
      let updateId = await this.collection.findOneAndUpdate({_id:id}, req.body, {
        new: true,
      })
      return updateId
    } catch (error) {
      console.log("Error:", error)
    }

  }

  async deleteById(id) {
    try {
      const deleteItem = await this.collection.deleteOne({_id:id})
      return deleteItem
      
    } catch (error) {
      console.log('error:', error)
    }
  }

  async deleteAll() {
    try {
      const deleteAll = await this.collection.deleteMany({})
      return deleteAll
      
    } catch (error) {
      console.log("Error:", error)
    }
  }

}


export default MongoClass

