"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRoomDatailsController = void 0;
const AllResponse_1 = __importDefault(require("../../../../responses/AllResponse"));
// import { RoomRepostroy } from "../../repository/implementation/roomRepostroy";
const roomRepostroy_1 = require("../../repository/implementation/roomRepostroy");
const AddRoomDetailsUseCase_1 = require("./AddRoomDetailsUseCase");
const AddRoomDetailsController_1 = require("./AddRoomDetailsController");
const roomRepostroy = new roomRepostroy_1.RoomRepostroy();
const allResponce = new AllResponse_1.default();
const addRoomDetailsUseCase = new AddRoomDetailsUseCase_1.AddRoomDetailsUseCase(roomRepostroy, allResponce);
const addRoomDatailsController = new AddRoomDetailsController_1.AddRoomDatailsController(addRoomDetailsUseCase, allResponce);
exports.addRoomDatailsController = addRoomDatailsController;
