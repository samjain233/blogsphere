require("../db/conn");
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  keyword: {
    type: String,
  },
  heading: {
    type: String,
    required: true,
  },
  city: String,
  state: String,
  pinCode: String,
  blogUrl: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
  },
  blurHash: String,
});

//model
export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
