// TenanModel.js

import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Tenan = db.define('Tenan', {
  KodeTenan: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  NamaTenan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  HP: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Tenan',
  timestamps: false,
});

export default Tenan;
