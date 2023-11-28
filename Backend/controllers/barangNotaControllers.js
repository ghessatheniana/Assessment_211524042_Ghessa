// barangNotaControllers.js

import BarangNota from '../models/BarangNotaModel.js';

export const getAllBarangNota = async (req, res) => {
  try {
    const barangNota = await BarangNota.findAll();
    res.status(200).json(barangNota);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};

export const createBarangNota = async (req, res) => {
  try {
    const barangNota = await BarangNota.create(req.body);
    res.status(201).json({ msg: 'New BarangNota Created', data: barangNota });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan dalam menginput barangNota' });
  }
};

export const getBarangNotaById = async (req, res) => {
  const { KodeNota, KodeBarang } = req.params;
  try {
    const response = await BarangNota.findOne({
      where: { KodeNota: KodeNota, KodeBarang: KodeBarang },
    });

    if (!response) {
      return res.status(404).json({ error: 'BarangNota tidak ditemukan' });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data barangNota' });
  }
};

export const updateBarangNota = async (req, res) => {
  const { KodeNota, KodeBarang } = req.params;

  try {
    const [updated] = await BarangNota.update(
      req.body,
      {
        where: { KodeNota: KodeNota, KodeBarang: KodeBarang },
      }
    );

    if (updated) {
      const updatedBarangNota = await BarangNota.findOne({
        where: { KodeNota: KodeNota, KodeBarang: KodeBarang },
      });
      return res.status(200).json({ message: 'BarangNota updated', data: updatedBarangNota });
    }

    return res.status(404).json({ error: 'BarangNota tidak ditemukan' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Terjadi kesalahan dalam mengupdate barangNota' });
  }
};

export const deleteBarangNota = async (req, res) => {
  const { KodeNota, KodeBarang } = req.params;

  try {
    const dataToDelete = await BarangNota.findOne({
      where: { KodeNota: KodeNota, KodeBarang: KodeBarang },
    });

    if (!dataToDelete) {
      return res.status(404).json({ error: 'BarangNota tidak ditemukan' });
    }

    await dataToDelete.destroy();

    res.status(200).json({ message: 'BarangNota deleted' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Terjadi kesalahan dalam menghapus barangNota' });
  }
};
