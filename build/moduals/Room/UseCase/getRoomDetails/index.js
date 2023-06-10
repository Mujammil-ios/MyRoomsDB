"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoomDetailsController = void 0;
const AllResponse_1 = __importDefault(require("../../../../responses/AllResponse"));
const roomRepostroy_1 = require("../../repository/implementation/roomRepostroy");
const GetRoomDetailsUseCase_1 = require("./GetRoomDetailsUseCase");
const GetRoomDetailsController_1 = require("./GetRoomDetailsController");
const roomRepostroy = new roomRepostroy_1.RoomRepostroy();
const allResponce = new AllResponse_1.default();
const getRoomDetailsUseCase = new GetRoomDetailsUseCase_1.GetRoomDetailsUseCase(roomRepostroy, allResponce);
const getRoomDetailsController = new GetRoomDetailsController_1.GetRoomDetailsController(getRoomDetailsUseCase, allResponce);
exports.getRoomDetailsController = getRoomDetailsController;
