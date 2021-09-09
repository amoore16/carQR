"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const path = require("path");
const app = express_1.default();
app.use(express_1.default.static(path.join(__dirname, "../../client/", "build")));
app.set("port", process.env.PORT || 8080);
app.get("/api", (req, res) => {
    res.json({ message: "Hello from the Back-end, it's fun here" });
});
exports.default = app;
//# sourceMappingURL=app.js.map