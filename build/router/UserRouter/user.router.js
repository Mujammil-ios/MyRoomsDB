"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUser = void 0;
const express_1 = __importDefault(require("express"));
const createUser_1 = require("../../moduals/User/UseCase/createUser");
const UserLogin_1 = require("../../moduals/User/UseCase/UserLogin");
const getRole_1 = require("../../moduals/User/UseCase/getRole");
const routerUser = express_1.default.Router();
exports.routerUser = routerUser;
routerUser.post('/create_user', (request, response) => {
    createUser_1.userController.handle(request, response);
});
routerUser.post('/login', (request, response) => {
    UserLogin_1.userLoginController.handle(request, response);
});
routerUser.get('/get_role', (request, response) => {
    getRole_1.getroleController.handle(request, response);
});
