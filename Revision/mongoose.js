import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
  .then(() => console.log("MongoDb Connected"))
  .catch(() => { console.log(err) });

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String

});

const customer = mongoose.model('customer', customerSchema);

// insert customers
async function insertCustomers() {
  try{
    await customer.insertMany([
      { name: 'Alice', email: 'alice@email.com', phone: '1111111111' },
      { name: 'Bob', email: 'bob@email.com', phone: '2222222222' },
      { name: 'Charlie', email: 'charlie@email.com', phone: '3333333333' }
    ]);

    console.log("Customer Inserted Successfully");
  }
  catch(err){
    console.log("Error Inserting Customers", error.message);
  }finally{
    mongoose.connection.close();
  }
}

insertCustomers();