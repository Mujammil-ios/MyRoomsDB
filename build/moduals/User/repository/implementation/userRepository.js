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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../../model/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const Role_1 = require("../../model/Role");
dotenv_1.default.config();
class UserRepository {
    addUser({ full_name, email, phone_number, password, role_id, latitudes, longitudes, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDetails = {
                full_name,
                email,
                phone_number,
                password,
                role_id,
                latitudes,
                longitudes,
            };
            if (password) {
                userDetails.password = yield bcrypt_1.default.hash(password, 12);
            }
            const createUser = yield User_1.User.create(userDetails);
            if (createUser) {
                return createUser;
            }
            else {
                return null;
            }
        });
    }
    checkMail({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExstingThisMail = yield User_1.User.findOne({
                where: { email: email },
            });
            return userExstingThisMail;
        });
    }
    login({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({
                where: { email: email }
            });
            const JWT_SCRECT_KEY1 = process.env.JWT_SCRECT_KEY;
            const token = jsonwebtoken_1.default.sign({ email, password }, JWT_SCRECT_KEY1, {
                expiresIn: 86400
            });
            return {
                userDetails: user,
                token: token
            };
        });
    }
    getRole() {
        return __awaiter(this, void 0, void 0, function* () {
            const getRole = yield Role_1.Role.findAll();
            return getRole;
        });
    }
}
exports.default = UserRepository;
