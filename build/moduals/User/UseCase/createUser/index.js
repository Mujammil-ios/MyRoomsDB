"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const AllResponse_1 = __importDefault(require("../../../../responses/AllResponse"));
const userRepository_1 = __importDefault(require("../../repository/implementation/userRepository"));
const UserController_1 = require("./UserController");
const UserUseCase_1 = require("./UserUseCase");
const userRepository = new userRepository_1.default();
const allresponse = new AllResponse_1.default();
const userUseCase = new UserUseCase_1.UserUseCase(userRepository, allresponse);
const userController = new UserController_1.UserController(userUseCase);
exports.userController = userController;
