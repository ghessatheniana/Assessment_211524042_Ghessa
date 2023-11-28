// NotaModel.js

import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Nota = db.define('Nota', {
  KodeNota: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  KodeTenan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  KodeKasir: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TglNota: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  JamNota: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  JumlahBelanja: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Diskon: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Nota',
  timestamps: false,
});

export default Nota;
