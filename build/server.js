"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_body_1 = __importDefault(require("morgan-body"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const moment_1 = __importDefault(require("moment"));
const router_1 = __importDefault(require("../src/router"));
const config = require('../src/config/config.ts');
const cors = require('cors');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use("/public/roomtypeimage", express_1.default.static("public/roomtypeimage"));
app.use("/public/coverimage", express_1.default.static("public/coverimage"));
app.use(cors());
const log = fs_1.default.createWriteStream(path_1.default.join(__dirname, "logs", (0, moment_1.default)().format('YYYY-MM-DD') + ".log"), { flags: "a" });
(0, morgan_body_1.default)(app, {
    stream: log
});
console.log();
app.use('/api/v1', router_1.default);
app.listen(3001);
