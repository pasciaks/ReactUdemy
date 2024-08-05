// const express = require("express");

// const resHandler = require("./response-handler");

// const app = express();

// app.get("/", resHandler);

// app.listen(3000);

import express from "express"; // es module syntax

import { resHandler } from "./response-handler.js"; // es module syntax

const app = express();

app.get("/", resHandler);

app.listen(3000);
