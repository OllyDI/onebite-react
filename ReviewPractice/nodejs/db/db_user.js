const { DataTypes } = require('sequelize');
const sequelize = require('./db.js');

const UserTable = sequelize.define('User', {
    pk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
    },
    pw: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    refresh_jwt: {
        type: DataTypes.TEXT,
        allowNull: true
    },

}, {
    tableName: 'users',
    timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    // define: {
    //     // createdAt, updatedAt을 null 허용
    //     timestamps: true,
    // },
    underscored: true,
    freezeTableName: true,
})

module.exports = UserTable;