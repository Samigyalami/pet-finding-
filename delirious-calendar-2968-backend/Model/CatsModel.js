const mongoose = require("mongoose");

const CatSchema = mongoose.Schema({
  id: { type: Number },
  cat_name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  color: { type: String, required: false },
  gender: { type: String, required: false },
  size: { type: String, required: false },
  description: { type: String, required: false },
  adoption_fee: { type: String, required: true },
  location: { type: String, required: true },
  image_url: { type: String, required: true },
});

const CatsModel = mongoose.model("Cat", CatSchema);

module.exports = CatsModel;
