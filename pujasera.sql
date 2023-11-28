-- create database
CREATE DATABASE pujasera;

-- create tables
CREATE TABLE barang (
  KodeBarang VARCHAR(10) PRIMARY KEY,
  NamaBarang VARCHAR(255),
  Satuan VARCHAR(50),
  HargaSatuan INTEGER,
  Stok INTEGER
);

CREATE TABLE Kasir (
  KodeKasir VARCHAR(10) PRIMARY KEY,
  Nama VARCHAR(255),
  HP VARCHAR(15)
);

CREATE TABLE Tenan (
  KodeTenan VARCHAR(10) PRIMARY KEY,
  NamaTenan VARCHAR(255),
  HP VARCHAR(15)
);

CREATE TABLE Nota (
  KodeNota VARCHAR(10) PRIMARY KEY,
  KodeTenan VARCHAR(10),
  KodeKasir VARCHAR(10),
  TglNota DATE,
  JamNota TIME,
  JumlahBelanja INTEGER,
  Diskon INTEGER,
  Total INTEGER,
  FOREIGN KEY (KodeTenan) REFERENCES Tenan(KodeTenan),
  FOREIGN KEY (KodeKasir) REFERENCES Kasir(KodeKasir)
);

CREATE TABLE BarangNota (
  KodeNota VARCHAR(10),
  KodeBarang VARCHAR(10),
  JumlahBarang INTEGER,
  HargaSatuan INTEGER,
  Jumlah INTEGER,
  PRIMARY KEY (KodeNota, KodeBarang),
  FOREIGN KEY (KodeNota) REFERENCES Nota(KodeNota),
  FOREIGN KEY (KodeBarang) REFERENCES Barang(KodeBarang)
);

-- drop database
DROP DATABASE IF EXISTS postgres;

-- drop tables
DROP TABLE IF EXISTS barang;
DROP TABLE IF EXISTS kasir;
DROP TABLE IF EXISTS tenan;
DROP TABLE IF EXISTS nota;
DROP TABLE IF EXISTS barangnota;

