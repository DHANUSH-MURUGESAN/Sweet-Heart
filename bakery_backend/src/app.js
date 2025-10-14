const express = require('express')
const http = require('http')
const router = require('./routes/routes')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/", router);
// serve uploaded files
app.use("/files", express.static(path.join(__dirname, "uploads")));
app.use("/wishlist", router);
app.use("/cart", router);


const server = http.createServer(app)

module.exports = server