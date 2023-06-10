"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, "../../.env") });
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER;
const dbPassword = process.env.DB_PASSWORD;
const Connection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
});
Connection.authenticate()
    .then(() => {
    console.log("Connection has been established successfully.");
})
    .catch((error) => {
    console.error("Unable to connect to the database: ", error);
});
const User_1 = require("../moduals/User/model/User");
const Role_1 = require("../moduals/User/model/Role");
const RoomType_1 = require("../moduals/Room/model/RoomType");
const RoomDetails_1 = require("../moduals/Room/model/RoomDetails");
//model connetions
User_1.User.init(Connection);
Role_1.Role.init(Connection);
RoomType_1.RoomType.init(Connection);
RoomDetails_1.RoomDetails.init(Connection);
User_1.User.associate(Role_1.Role);
User_1.User.hasOne(Role_1.Role, { foreignKey: "id" });
Role_1.Role.hasMany(User_1.User, { foreignKey: "role_id" });
RoomDetails_1.RoomDetails.hasMany(User_1.User, { foreignKey: 'id', sourceKey: 'user_id' });
User_1.User.hasMany(RoomDetails_1.RoomDetails, { foreignKey: 'user_id', sourceKey: 'id' });
RoomType_1.RoomType.hasMany(RoomDetails_1.RoomDetails, { foreignKey: 'room_type_id', sourceKey: "id" });
exports.default = Connection;
