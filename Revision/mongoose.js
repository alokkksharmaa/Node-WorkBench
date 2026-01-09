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
  try {
    await customer.insertMany([
      { name: 'Alice', email: 'alice@email.com', phone: '8335635665' },
      { name: 'Bob', email: 'bob@email.com', phone: '9875642315' },
      { name: 'Charlie', email: 'charlie@email.com', phone: '6586457891' }
    ]);

    console.log("Customer Inserted Successfully");
  }
  catch (err) {
    console.log("Error Inserting Customers", err.message);
  } finally {
    mongoose.connection.close();
  }
}

insertCustomers();