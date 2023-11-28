// KasirControllers.js

import Kasir from '../models/KasirModel.js';

export const getAllKasir = async (req, res) => {
  try {
    const kasir = await Kasir.findAll();
    res.status(200).json(kasir);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};

export const createKasir = async (req, res) => {
  try {
    const kasir = await Kasir.create(req.body);
    res.status(201).json({ msg: 'New Kasir Created', data: kasir });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan dalam menginput kasir' });
  }
};

export const getKasirById = async (req, res) => {
  const { id_kasir } = req.params;
  try {
    const response = await Kasir.findOne({
      where: { id_kasir: id_kasir },
    });

    if (!response) {
      return res.status(404).json({ error: 'Kasir tidak ditemukan' });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data kasir' });
  }
};

export const updateKasir = async (req, res) => {
  const { id_kasir } = req.params;

  try {
    const [updated] = await Kasir.update(
      req.body,
      {
        where: { id_kasir: id_kasir },
      }
    );

    if (updated) {
      const updatedKasir = await Kasir.findOne({
        where: { id_kasir: id_kasir },
      });
      return res.status(200).json({ message: 'Kasir updated', data: updatedKasir });
    }

    return res.status(404).json({ error: 'Kasir tidak ditemukan' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Terjadi kesalahan dalam mengupdate kasir' });
  }
};

export const deleteKasir = async (req, res) => {
  const { id_kasir } = req.params;

  try {
    const dataToDelete = await Kasir.findOne({
      where: { id_kasir: id_kasir },
    });

    if (!dataToDelete) {
      return res.status(404).json({ error: 'Kasir tidak ditemukan' });
    }

    await dataToDelete.destroy();

    res.status(200).json({ message: 'Kasir deleted' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Terjadi kesalahan dalam menghapus kasir' });
  }
};
