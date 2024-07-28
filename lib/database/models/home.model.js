import { Schema, model, models } from 'mongoose';
const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    reuired: [true,'Owner is required']
  },
  price: {
    type: Number,
    required: [true,'price is required']
  },
  location: {
    type: String,
    required: [true,'Location is required'],
  },
  description: {
    type: String,
    required: [true,'description is required'],
  },
 
 
 
});

const Home =models?.Home|| model('Home', homeSchema);

export default Home;
