"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const { DataTypes, Model } = require("sequelize");
class Role extends Model {
    static init(sequelize) {
        super.init({
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            role_name: {
                type: DataTypes.STRING(200),
            },
            status: {
                type: DataTypes.STRING(50),
            },
        }, {
            modelName: "roles",
            sequelize,
        });
    }
    static associate(models) {
    }
}
exports.Role = Role;
