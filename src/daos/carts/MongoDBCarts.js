import MongoClass from "../../contenedores/MongoClass.js";

export class MongoDBCarts extends MongoClass {
  constructor() {
      super("carts", {
        
        products: [
          {
            title: {
              type: String,
              require: true,
              trim: true,
            },
            price: {
              type: Number,
              required: true,
              trim: true,
            },
            stock: {
              type: Number,
              default: 0,
              trim: true,
            },
            image: {
              type: String,
              trim: true,
            },
          },
        ],
      });
  }
}
