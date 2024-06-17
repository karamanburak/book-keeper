//* Book Models
const mongoose = require("mongoose");

const bookPostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        author: {
            type: String,
            required: true
        },
        ISBN: {
            type: Number,
            required: true,
            unique: true
        },
        genre: {
            type: string,
        },
        publicationYear: {
            type: string,
        },
        image: {
            type: string,
            require: true,
            unique: true
        },
    },
    {
        collection: "bookPosts",
        timestamps: true,
    }
)

module.exports = {
    BookPost: mongoose.model("bookpost", bookPostSchema)
}