"use strict";

const express = require("express");
const app = express();
const cors = require('cors')

require("dotenv").config();
const PORT = process.env.PORT || 8000

//* sadece belirtilen adres erisim saglayabilir
// const corsOptions = {
//     origin: `http://localhost:5173`,
//     methods: ["GET", "PUT", "DELETE", "POST"]
// };

// app.use(cors(corsOptions));

//* herkes erisim saglayabilir
app.use(cors());

app.use(express.json());
require("./src/configs/dbConnection")

// HomePage:
app.all('/', (req, res) => {
    res.send("<h1 style='text-align:center;margin-top:150px'>WELCOME TO BOOK-KEEPER API</h1>");
})

// app.use("/book(s)?", require("./src/routes/bookRoute"))
app.use("/books", require("./src/routes/bookRoute"))

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))