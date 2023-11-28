// KasirModel.js

import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Kasir = db.define('Kasir', {
  KodeKasir: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  Nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  HP: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Kasir',
  timestamps: false,
});

export default Kasir;
