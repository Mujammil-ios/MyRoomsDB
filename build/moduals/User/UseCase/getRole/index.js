"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getroleController = void 0;
const AllResponse_1 = __importDefault(require("../../../../responses/AllResponse"));
const userRepository_1 = __importDefault(require("../../repository/implementation/userRepository"));
const RoleController_1 = require("./RoleController");
const RoleUseCase_1 = require("./RoleUseCase");
const userRepository = new userRepository_1.default();
const allResponce = new AllResponse_1.default();
const roleUseCase = new RoleUseCase_1.RoleUseCase(userRepository, allResponce);
const getroleController = new RoleController_1.RoleController(roleUseCase, allResponce);
exports.getroleController = getroleController;
