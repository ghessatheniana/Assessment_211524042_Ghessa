// routes.js

import express from 'express';
import * as barangController from '../controllers/barangControllers.js';
import * as kasirController from '../controllers/kasirControllers.js';
import * as tenanController from '../controllers/tenanControllers.js';
import * as notaController from '../controllers/notaControllers.js';
import * as barangNotaController from '../controllers/barangNotaControllers.js';

const router = express.Router();

// Routes for Barang
router.get('/barang', barangController.getAllBarang);
router.get('/barang/:KodeBarang', barangController.getBarangById);
router.post('/barang', barangController.createBarang);
router.put('/barang/:KodeBarang', barangController.updateBarang);
router.delete('/barang/:KodeBarang', barangController.deleteBarang);

// Routes for Kasir
router.get('/kasir', kasirController.getAllKasir);
router.get('/kasir/:KodeKasir', kasirController.getKasirById);
router.post('/kasir', kasirController.createKasir);
router.put('/kasir/:KodeKasir', kasirController.updateKasir);
router.delete('/kasir/:KodeKasir', kasirController.deleteKasir);

// Routes for Tenan
router.get('/tenan', tenanController.getAllTenan);
router.get('/tenan/:KodeTenan', tenanController.getTenanById);
router.post('/tenan', tenanController.createTenan);
router.put('/tenan/:KodeTenan', tenanController.updateTenan);
router.delete('/tenan/:KodeTenan', tenanController.deleteTenan);

// Routes for Nota
router.get('/nota', notaController.getAllNota);
router.get('/nota/:KodeNota', notaController.getNotaById);
router.post('/nota', notaController.createNota);
router.put('/nota/:KodeNota', notaController.updateNota);
router.delete('/nota/:KodeNota', notaController.deleteNota);

// Routes for BarangNota
router.get('/barangnota', barangNotaController.getAllBarangNota);
router.get('/barangnota/:KodeNota/:KodeBarang', barangNotaController.getBarangNotaById);
router.post('/barangnota', barangNotaController.createBarangNota);
router.put('/barangnota/:KodeNota/:KodeBarang', barangNotaController.updateBarangNota);
router.delete('/barangnota/:KodeNota/:KodeBarang', barangNotaController.deleteBarangNota);

export default router;
