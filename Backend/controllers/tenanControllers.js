// tenanControllers.js

import Tenan from '../models/TenanModel.js';

export const getAllTenan = async (req, res) => {
  try {
    const tenan = await Tenan.findAll();
    res.status(200).json(tenan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};

export const createTenan = async (req, res) => {
  try {
    const tenan = await Tenan.create(req.body);
    res.status(201).json({ msg: 'New Tenan Created', data: tenan });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan dalam menginput tenan' });
  }
};

export const getTenanById = async (req, res) => {
  const { KodeTenan } = req.params;
  try {
    const response = await Tenan.findOne({
      where: { KodeTenan: KodeTenan },
    });

    if (!response) {
      return res.status(404).json({ error: 'Tenan tidak ditemukan' });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data tenan' });
  }
};

export const updateTenan = async (req, res) => {
  const { KodeTenan } = req.params;

  try {
    const [updated] = await Tenan.update(
      req.body,
      {
        where: { KodeTenan: KodeTenan },
      }
    );

    if (updated) {
      const updatedTenan = await Tenan.findOne({
        where: { KodeTenan: KodeTenan },
      });
      return res.status(200).json({ message: 'Tenan updated', data: updatedTenan });
    }

    return res.status(404).json({ error: 'Tenan tidak ditemukan' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Terjadi kesalahan dalam mengupdate tenan' });
  }
};

export const deleteTenan = async (req, res) => {
  const { KodeTenan } = req.params;

  try {
    const dataToDelete = await Tenan.findOne({
      where: { KodeTenan: KodeTenan },
    });

    if (!dataToDelete) {
      return res.status(404).json({ error: 'Tenan tidak ditemukan' });
    }

    await dataToDelete.destroy();

    res.status(200).json({ message: 'Tenan deleted' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Terjadi kesalahan dalam menghapus tenan' });
  }
};
