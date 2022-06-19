import dotenv from 'dotenv';
dotenv.config();

let collectionProductsDao  

switch (process.env.DB_NAME) {
   case 'mongoDB': 
        import('./products/MongoDBProducts.js').then(({MongoDBProducts}) => {
              collectionProductsDao = new MongoDBProducts()
            })
        break;
    
    case 'firebaseDB':
     
        break;
    
    default:
        console.log('Está en default')
        break;

    }


let collectionCartsDao

switch (process.env.DB_NAME) {
  case "mongoDB":
    import("./carts/MongoDBCarts.js").then(({ MongoDBCarts }) => {
      collectionCartsDao = new MongoDBCarts();
    });
    break;

  case "firebaseDB":
    break;

  default:
    console.log("Está en default");
    break;
}

export { collectionProductsDao, collectionCartsDao }


