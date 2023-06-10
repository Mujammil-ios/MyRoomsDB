"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoomTypeController = void 0;
const AllResponse_1 = __importDefault(require("../../../../responses/AllResponse"));
// import { RoomRepostroy } from "../../repository/implementation/roomRepostroy";
const roomRepostroy_1 = require("../../repository/implementation/roomRepostroy");
const GetRoomTypeUseCase_1 = require("./GetRoomTypeUseCase");
const GetRoomTypeController_1 = require("./GetRoomTypeController");
const roomRepostroy = new roomRepostroy_1.RoomRepostroy();
const allResponce = new AllResponse_1.default();
const getRoomTypeUseCase = new GetRoomTypeUseCase_1.GetRoomTypeUseCase(roomRepostroy, allResponce);
const getRoomTypeController = new GetRoomTypeController_1.GetRoomTypeController(getRoomTypeUseCase, allResponce);
exports.getRoomTypeController = getRoomTypeController;
