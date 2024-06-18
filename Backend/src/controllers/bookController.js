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
    search: async (req, res) => {
        // const query = {};

        // if (req.query.name) {
        //     // Case insensitive (büyük-küçük harf duyarsız) arama için 'i' bayrağını kullanıyoruz
        //     query.name = { $regex: req.query.name, $options: 'i' };
        // }

        // if (req.query.author) {
        //     query.author = { $regex: req.query.author, $options: 'i' };
        // }
        // const data = await BookPost.find(query)
        const data = await BookPost.find()

        res.status(200).send({
            error: false,
            query: req.query,
            post: data,

        })
    },
    update: async (req, res) => {
        // const data = await BookPost.updateOne({ _id: req.params.io }, req.body) // * If we are using this method and we want to get new Data, we need to use newData: await BookPost.findOne({ _id: req.params.id })
        const data = await BookPost.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.status(202).send({
            error: false,
            post: data,
            // newData: await BookPost.findOne({ _id: req.params.id })
        })
    },
    delete: async (req, res) => {
        const data = await BookPost.deleteOne({ _id: req.params.id })
        if (data.deletedCount) {
            res.sendStatus(204)
        } else {
            res.status(404).send({
                error: false,
                message: "Book not found"
            })
        }
    },

    deleteMany: async (req, res) => {
        // const data = await BookPost.deleteMany()
        const data = await BookPost.deleteMany({ genre: "Horror" })
        if (data.deletedCount) {
            res.status(200).send({
                error: false,
                message: "All Book have been successfully deleted"
            })
        } else {
            res.status(404).send({
                error: false,
                message: "There are no Books."
            })
        }
    }

}