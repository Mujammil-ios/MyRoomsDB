"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomType = void 0;
const { DataTypes, Model } = require("sequelize");
const ROOM_TYPE_IMAGE = process.env.ROOM_TYPE_IMAGE;
class RoomType extends Model {
    static init(sequelize) {
        super.init({
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            room_type_name: {
                type: DataTypes.STRING(200),
            },
            image: {
                type: DataTypes.STRING(50),
                get() {
                    return (ROOM_TYPE_IMAGE + this.getDataValue("image"));
                },
            },
            order: DataTypes.INTEGER,
        }, {
            modelName: "room_types",
            sequelize,
        });
    }
    static associate(models) { }
}
exports.RoomType = RoomType;
