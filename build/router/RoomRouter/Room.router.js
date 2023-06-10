"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerRoom = void 0;
const express_1 = __importDefault(require("express"));
const addRoomType_1 = require("../../moduals/Room/UseCase/addRoomType");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const getRoomType_1 = require("../../moduals/Room/UseCase/getRoomType");
const addRoomDetails_1 = require("../../moduals/Room/UseCase/addRoomDetails");
const getRoomDetails_1 = require("../../moduals/Room/UseCase/getRoomDetails");
const routerRoom = express_1.default.Router();
exports.routerRoom = routerRoom;
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'image') {
            cb(null, path_1.default.join(__dirname, "../../../public/roomtypeimage"));
        }
        else if (file.fieldname === 'room_cover_image') {
            cb(null, path_1.default.join(__dirname, "../../../public/coverimage"));
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path_1.default.extname(file.originalname));
    },
});
const upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path_1.default.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: Only image file upload");
    }
});
routerRoom.post("/create_room_type", upload.single("image"), (request, response) => {
    addRoomType_1.roomTypeController.handle(request, response);
});
routerRoom.post("/add_room", upload.single("room_cover_image"), (request, response) => {
    addRoomDetails_1.addRoomDatailsController.handle(request, response);
});
routerRoom.get("/get_room_type", (request, response) => {
    getRoomType_1.getRoomTypeController.handle(request, response);
});
routerRoom.get("/get_room_details", (request, response) => {
    getRoomDetails_1.getRoomDetailsController.handle(request, response);
});
