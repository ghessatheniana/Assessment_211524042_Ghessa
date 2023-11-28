// notaControllers.js

import Nota from '../models/NotaModel.js';
import BarangNota from '../models/BarangNotaModel.js';

export const getAllNota = async (req, res) => {
  try {
    const nota = await Nota.findAll();
    res.status(200).json(nota);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};

export const createNota = async (req, res) => {
  try {
    const { KodeNota, KodeTenan, KodeKasir, TglNota, JamNota, JumlahBelanja, Diskon, Total, barangNotaList } = req.body;

    const existingNota = await Nota.findOne({
      where: { KodeNota: KodeNota },
    });

    if (existingNota) {
      return res.status(409).json({ error: 'Nota sudah ada' });
    }

    const createdNota = await Nota.create({
      KodeNota,
      KodeTenan,
      KodeKasir,
      TglNota,
      JamNota,
      JumlahBelanja,
      Diskon,
      Total,
    });

    if (barangNotaList && barangNotaList.length > 0) {
      await BarangNota.bulkCreate(barangNotaList.map(item => ({ KodeNota, ...item })));
    }

    res.status(201).json({ msg: 'New Nota Created', data: createdNota });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan dalam menginput nota' });
  }
};

export const getNotaById = async (req, res) => {
  const { KodeNota } = req.params;
  try {
    const response = await Nota.findOne({
      where: { KodeNota: KodeNota },
      include: [BarangNota],
    });

    if (!response) {
      return res.status(404).json({ error: 'Nota tidak ditemukan' });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data nota' });
  }
};

export const updateNota = async (req, res) => {
  const { KodeNota } = req.params;

  try {
    const existingNota = await Nota.findOne({
      where: { KodeNota: KodeNota },
    });

    if (!existingNota) {
      return res.status(404).json({ error: 'Nota tidak ditemukan' });
    }

    const { KodeTenan, KodeKasir, TglNota, JamNota, JumlahBelanja, Diskon, Total, barangNotaList } = req.body;

    await existingNota.update({
      KodeTenan,
      KodeKasir,
      TglNota,
      JamNota,
      JumlahBelanja,
      Diskon,
      Total,
    });

    // Hapus semua barangNota terkait
    await BarangNota.destroy({
      where: { KodeNota: KodeNota },
    });

    // Buat ulang barangNota berdasarkan data yang diterima
    if (barangNotaList && barangNotaList.length > 0) {
      await BarangNota.bulkCreate(barangNotaList.map(item => ({ KodeNota, ...item })));
    }

    const updatedNota = await Nota.findOne({
      where: { KodeNota: KodeNota },
      include: [BarangNota],
    });

    res.status(200).json({ message: 'Nota updated', data: updatedNota });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Terjadi kesalahan dalam mengupdate nota' });
  }
};

export const deleteNota = async (req, res) => {
  const { KodeNota } = req.params;

  try {
    // Mengambil data yang akan dihapus
    const notaToDelete = await Nota.findOne({
      where: { KodeNota: KodeNota },
    });

    if (!notaToDelete) {
      return res.status(404).json({ error: 'Nota tidak ditemukan' });
    }

    // Hapus data yang telah ditemukan
    await notaToDelete.destroy();

    res.status(200).json({ message: 'Nota deleted' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Terjadi kesalahan dalam menghapus nota' });
  }
};
