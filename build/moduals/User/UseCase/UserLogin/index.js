"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginController = void 0;
const AllResponse_1 = __importDefault(require("../../../../responses/AllResponse"));
const userRepository_1 = __importDefault(require("../../repository/implementation/userRepository"));
const UserLoginController_1 = require("./UserLoginController");
const UserLoginUseCase_1 = require("./UserLoginUseCase");
const userRepository = new userRepository_1.default();
const allResponce = new AllResponse_1.default();
const userLoginUseCase = new UserLoginUseCase_1.UserLoginUseCase(userRepository, allResponce);
const userLoginController = new UserLoginController_1.UserLoginController(userLoginUseCase, allResponce);
exports.userLoginController = userLoginController;
