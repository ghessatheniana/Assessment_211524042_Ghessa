// BarangControllers.js

import Barang from '../models/BarangModel.js';

export const getAllBarang = async (req, res) => {
  try {
    const barang = await Barang.findAll();
    res.status(200).json(barang);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};

export const createBarang = async (req, res) => {
  try {
    const barang = await Barang.create(req.body);
    res.status(201).json({ msg: 'New Barang Created', data: barang });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan dalam menginput barang' });
  }
};

export const getBarangById = async (req, res) => {
  const { id_barang } = req.params;
  try {
    const response = await Barang.findOne({
      where: { id_barang: id_barang },
    });

    if (!response) {
      return res.status(404).json({ error: 'Barang tidak ditemukan' });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data barang' });
  }
};

export const updateBarang = async (req, res) => {
  const { id_barang } = req.params;

  try {
    const [updated] = await Barang.update(
      req.body,
      {
        where: { id_barang: id_barang },
      }
    );

    if (updated) {
      const updatedBarang = await Barang.findOne({
        where: { id_barang: id_barang },
      });
      return res.status(200).json({ message: 'Barang updated', data: updatedBarang });
    }

    return res.status(404).json({ error: 'Barang tidak ditemukan' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Terjadi kesalahan dalam mengupdate barang' });
  }
};

export const deleteBarang = async (req, res) => {
  const { id_barang } = req.params;

  try {
    const dataToDelete = await Barang.findOne({
      where: { id_barang: id_barang },
    });

    if (!dataToDelete) {
      return res.status(404).json({ error: 'Barang tidak ditemukan' });
    }

    await dataToDelete.destroy();

    res.status(200).json({ message: 'Barang deleted' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Terjadi kesalahan dalam menghapus barang' });
  }
};
