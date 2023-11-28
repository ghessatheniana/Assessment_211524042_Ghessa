import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Barang = db.define('Barang', {
    KodeBarang: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    NamaBarang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Satuan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    HargaSatuan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Stok: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'Barang',
    timestamps: false,
  });
  
  export default Barang;