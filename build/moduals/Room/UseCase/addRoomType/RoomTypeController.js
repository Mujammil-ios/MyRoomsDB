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
exports.RoomTypeController = void 0;
class RoomTypeController {
    constructor(roomType, allResponce) {
        this.roomType = roomType;
        this.allResponce = allResponce;
    }
    handle(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { room_type_name, order } = request.body;
            const image = (_a = request.file) === null || _a === void 0 ? void 0 : _a.filename;
            const addData = {
                room_type_name: room_type_name,
                image: image,
                order: order,
            };
            console.log({ addData });
            if (image) {
                addData.image = image;
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
exports.RoomTypeController = RoomTypeController;
