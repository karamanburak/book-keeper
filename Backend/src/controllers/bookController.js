//*Book Controller

require("express-async-errors")
const { BookPost } = require("../models/bookModel")

module.exports.BookPostController = {
    list: async (req, res) => {
        // const data = await BookPost.find({published: true})
        const data = await BookPost.find()

        res.status(200).send({
            error: false,
            post: data,
        })
    },
    create: async (req, res) => {
        const data = await BookPost.create(req.body)

        res.status(201).send({
            error: false,
            book: data
        })
    },
    read: async (req, res) => {
        // const data = await BookPost.findOne({ _id: req.params.id })
        const data = await BookPost.findById(req.params.id) //* it's accept only id choise

        res.status(200).send({
            error: false,
            post: data,
        })
    },
}
