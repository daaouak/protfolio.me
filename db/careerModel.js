// db/taskModel.js
import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const CareerCard = mongoose.model('Career', careerSchema);

export default CareerCard;
