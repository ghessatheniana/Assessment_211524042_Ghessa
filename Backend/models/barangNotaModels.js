// BarangNotaModel.js

import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const BarangNota = db.define('BarangNota', {
  KodeNota: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  KodeBarang: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  JumlahBarang: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  HargaSatuan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Jumlah: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'BarangNota',
  timestamps: false,
});

export default BarangNota;
