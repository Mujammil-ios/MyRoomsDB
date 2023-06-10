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
exports.RoleUseCase = void 0;
class RoleUseCase {
    constructor(UserLogin, allResponce) {
        this.UserLogin = UserLogin;
        this.allResponce = allResponce;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const getRole = yield this.UserLogin.getRole();
            if (getRole) {
                return yield this.allResponce.success('Get All User Role', getRole);
            }
            else {
                return yield this.allResponce.fail('Role get fail', []);
            }
        });
    }
}
exports.RoleUseCase = RoleUseCase;
