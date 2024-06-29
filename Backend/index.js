"use strict";

const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env?.PORT || 5173;

//* sadece belirtilen adres erisim saglayabilir
// const corsOptions = {
//     origin: `http://localhost:5173`,
//     methods: ["GET", "PUT", "DELETE", "POST"]
// };

// app.use(cors(corsOptions));

//* herkes erisim saglayabilir
// app.use(cors());

//! cors
// app.use(cors()); //* tüm istemci urllerine ve tüm http methodlara izin verir.

//* specific
app.use(
  cors({
    origin: "http://localhost:5173", //* sondaki slash olmayacak. sadece localhost:3000 e izin ver. Host adresi
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", //* methodlara verilecek izinleri ayarlanabilir.
  })
);

app.use(express.json());
require("./src/configs/dbConnection");

// HomePage:
app.all("/", (req, res) => {
  res.send(
    "<h1 style='text-align:center;margin-top:150px'>WELCOME TO BOOK-KEEPER API</h1>"
  );
});

// app.use("/book(s)?", require("./src/routes/bookRoute"))
app.use("/books", require("./src/routes/bookRoute"));

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
