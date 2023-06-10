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
exports.AddRoomDatailsController = void 0;
class AddRoomDatailsController {
    constructor(roomType, allResponce) {
        this.roomType = roomType;
        this.allResponce = allResponce;
    }
    handle(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id, room_type_id, address_1, address_2, bethroom, room, about, monthly_amount, deposite_amount } = request.body;
            const room_cover_image = (_a = request.file) === null || _a === void 0 ? void 0 : _a.filename;
            const addData = {
                user_id: user_id,
                room_type_id: room_type_id,
                room_cover_image: room_cover_image,
                address_1: address_1,
                address_2: address_2,
                bethroom: bethroom,
                room: room,
                about: about,
                monthly_amount: monthly_amount,
                deposite_amount: deposite_amount,
            };
            if (room_cover_image) {
                addData.room_cover_image = room_cover_image;
            }
            const result = yield this.roomType.execute(addData);
            if (result) {
                return response.status(200).send(result);
            }
            else {
                return response.status(500).send(result);
            }
        });
    }
}
exports.AddRoomDatailsController = AddRoomDatailsController;
