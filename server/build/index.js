"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var homeRoutes_1 = require("./routes/homeRoutes");
var PORT = 6000;
var app = express_1.default();
app.use(homeRoutes_1.router);
app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});
