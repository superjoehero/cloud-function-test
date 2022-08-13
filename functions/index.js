const functions = require("firebase-functions");
const express = require("express");
const app = express();

const cors = require("cors")({ originL: true });

const jwt = require("jsonwebtoken");

app.get("/api", (request, response) => {
    cors(request, response, () => {
        response.send("API");
    })
})

exports.app = functions.https.onRequest(app);