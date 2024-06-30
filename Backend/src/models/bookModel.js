//* Book Models
const mongoose = require("mongoose");

const bookPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "The Book must have title!"],
      unique: true,
    },
    author: {
      type: String,
      required: [true, "The Book must have a author!"],
    },
    ISBN: {
      type: Number,
      required: true,
      unique: true,
    },
    genre: {
      type: String,
    },
    publicationYear: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: [true, "The Book must have a image!"],
      unique: true,
    },
  },
  {
    collection: "bookPosts",
    timestamps: true,
  }
);

module.exports = {
  BookPost: mongoose.model("bookpost", bookPostSchema),
};
