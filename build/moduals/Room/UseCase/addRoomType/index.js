"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomTypeController = void 0;
const AllResponse_1 = __importDefault(require("../../../../responses/AllResponse"));
// import { RoomRepostroy } from "../../repository/implementation/roomRepostroy";
const roomRepostroy_1 = require("../../repository/implementation/roomRepostroy");
const RoomTypeController_1 = require("./RoomTypeController");
const RoomTypeUseCase_1 = require("./RoomTypeUseCase");
const roomRepostroy = new roomRepostroy_1.RoomRepostroy();
const allResponce = new AllResponse_1.default();
const roomTypeUseCase = new RoomTypeUseCase_1.RoomTypeUseCase(roomRepostroy, allResponce);
const roomTypeController = new RoomTypeController_1.RoomTypeController(roomTypeUseCase, allResponce);
exports.roomTypeController = roomTypeController;
