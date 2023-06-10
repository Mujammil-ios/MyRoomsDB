"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRepostroy = void 0;
const User_1 = require("../../../User/model/User");
const RoomDetails_1 = require("../../model/RoomDetails");
const RoomType_1 = require("../../model/RoomType");
class RoomRepostroy {
    addRoomType({ room_type_name, image, order }) {
        return __awaiter(this, void 0, void 0, function* () {
            const getData = {
                room_type_name: room_type_name,
                image: image,
                order: order,
            };
            const createRoomType = yield RoomType_1.RoomType.create(getData);
            return createRoomType;
        });
    }
    getRoomType() {
        return __awaiter(this, void 0, void 0, function* () {
            const getRoomType = yield RoomType_1.RoomType.findAll({
                order: [["order", "ASC"]],
                // include: {
                //   model: RoomDetails
                // }
            });
            return getRoomType;
        });
    }
    addRoomDetails({ user_id, room_type_id, room_cover_image, address_1, address_2, bethroom, room, about, monthly_amount, deposite_amount, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const addRoomDetails = {
                user_id,
                room_type_id,
                room_cover_image,
                address_1,
                address_2,
                bethroom,
                room,
                about,
                monthly_amount,
                deposite_amount,
            };
            const roomCreate = yield RoomDetails_1.RoomDetails.create(addRoomDetails);
            return roomCreate;
        });
    }
    getRoomDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const getRoomAll = yield User_1.User.findAll({
                include: {
                    model: RoomDetails_1.RoomDetails
                }
            });
            return getRoomAll;
        });
    }
}
exports.RoomRepostroy = RoomRepostroy;
