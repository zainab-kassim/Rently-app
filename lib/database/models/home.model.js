import { Schema, model, models } from 'mongoose';
const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true,'Owner is required']
  },
  title: {
    type: String,
    required: [true,'Title is required'],
  },
  phonenumber:{
    type:String,
    required:[true,'Phonenumber is required'],
  },
  price: {
    type: String,
    required: [true,'price is required'],
  },
  location: {
    type: String,
    required: [true,'Location is required'],
  },
  description: {
    type: String,
    required: [true,'description is required'],
  },
  img: [{
    url: {
      type: String,
      required: [true, 'Image URL is required']
    }
  }]
 
 
 
});

const Home =models?.Home|| model('Home', homeSchema);

export default Home;
