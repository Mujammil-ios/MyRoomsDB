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
exports.UserUseCase = void 0;
class UserUseCase {
    constructor(UserUseCase, allResponse) {
        this.UserUseCase = UserUseCase;
        this.allResponse = allResponse;
    }
    execute({ full_name, email, phone_number, password, confirm_password, role_id, latitudes, longitudes, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userMailCheck = yield this.UserUseCase.checkMail({ email });
            if (userMailCheck) {
                return yield this.allResponse.fail("This mail already register", []);
            }
            if (password === confirm_password) {
                const userData = yield this.UserUseCase.addUser({
                    full_name,
                    email,
                    phone_number,
                    password,
                    role_id,
                    latitudes,
                    longitudes,
                });
                if (userData) {
                    return yield this.allResponse.success('user create sucessfully', userData);
                }
                else {
                    return yield this.allResponse.fail('User create fail', []);
                }
            }
            else {
                return yield this.allResponse.fail('both password dont match', []);
            }
        });
    }
}
exports.UserUseCase = UserUseCase;
