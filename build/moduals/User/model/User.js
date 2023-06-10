"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const { DataTypes, Model } = require("sequelize");
class User extends Model {
    static init(sequelize) {
        super.init({
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            full_name: {
                type: DataTypes.STRING(200),
            },
            email: {
                type: DataTypes.STRING(50),
            },
            phone_number: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            },
            role_id: {
                type: DataTypes.STRING(100),
            },
            latitudes: {
                type: DataTypes.DECIMAL(8, 6),
            },
            longitudes: {
                type: DataTypes.DECIMAL(9, 6),
            },
        }, {
            modelName: "users",
            sequelize,
        });
    }
    static associate(model) {
        // this.hasOne(model.roles, {foreginKey:'id'})
    }
}
exports.User = User;
