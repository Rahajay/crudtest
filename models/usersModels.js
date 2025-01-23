import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users',{
  id: {
    type: DataTypes.UUID,  // Menggunakan UUID
    defaultValue: DataTypes.UUIDV4,  // UUID akan otomatis di-generate
    primaryKey: true,  // Menandakan ini adalah primary key
    allowNull: false,  // Tidak boleh null
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
  },{
        freezeTableName:true,
        timestamps: false // Disable createdAt and updatedAt
});

export default Users;