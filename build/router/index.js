"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRouter_1 = require("./UserRouter");
const RoomRouter_1 = require("./RoomRouter");
const router = express_1.default.Router();
router.use("/user", UserRouter_1.routerUser);
router.use("/room", RoomRouter_1.routerRoom);
exports.default = router;
