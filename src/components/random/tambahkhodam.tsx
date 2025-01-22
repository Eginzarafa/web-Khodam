"use client";
import { useEffect, useState } from "react";
import khodamIndonesia, { khodam } from "../data/khodam.ts";
import { Input, Button } from "antd";

function TambahKhodam() {
  const [khodams, setKhodams] = useState<khodam[]>(
    () => JSON.parse(localStorage.getItem("khodams") ?? "[]") || khodamIndonesia
  );

  const [newKhodam, setNewKhodam] = useState<khodam>({
    nama_khodam: "",
    deskripsi: "",
    akan_muncul: "",
  });

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("khodams", JSON.stringify(false));
  }, [khodams]);

  const handleTambahKhodam = () => {
    setKhodams([
      ...khodams,
      { ...newKhodam, nama_khodam: `Khodam ${khodams.length + 1}` },
    ]);
    setNewKhodam({
      nama_khodam: "",
      deskripsi: "",
      akan_muncul: "",
    });
    setIsOpenModal(false);
  };

  return (
    <div>
      <Button
        style={{ marginBottom: "20px" }}
        type="primary"
        onClick={() => setIsOpenModal(true)}
      >
        Tambah Khodam
      </Button>
      {isOpenModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vw",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ color: "black", justifyContent: "center" }}>
              Form Tambah Khodam
            </h2>
            <label htmlFor="nama_khodam">Nama Khodam</label>
            <Input
              id="nama_khodam"
              style={{
                marginTop: "10px",
                padding: "10px",
                marginBottom: "20px",
              }}
              type="text"
              placeholder="Nama Khodam"
              value={newKhodam.nama_khodam}
              onChange={(e) =>
                setNewKhodam({ ...newKhodam, nama_khodam: e.target.value })
              }
            />
            <label htmlFor="deskripsi">Deskripsi Khodam</label>
            <Input
              id="deskripsi"
              style={{
                marginTop: "10px",
                padding: "10px",
                marginBottom: "20px",
              }}
              type="text"
              placeholder="Deskripsi"
              value={newKhodam.deskripsi}
              onChange={(e) =>
                setNewKhodam({ ...newKhodam, deskripsi: e.target.value })
              }
            />
            <label htmlFor="akan_muncul">Khodam Muncul Ketika</label>
            <Input
              id="akan_muncul"
              style={{
                marginTop: "10px",
                padding: "10px",
                marginBottom: "20px",
              }}
              type="text"
              placeholder="Akan Muncul "
              value={newKhodam.akan_muncul}
              onChange={(e) =>
                setNewKhodam({ ...newKhodam, akan_muncul: e.target.value })
              }
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button type="primary" onClick={handleTambahKhodam}>
                Tambah
              </Button>
              <Button onClick={() => setIsOpenModal(false)}>Batal</Button>
            </div>
          </div>
        </div>
      )}

      <ul style={{ marginTop: "20px" }}>
        {khodams.map((khodam, index) => (
          <li key={index}>
            <strong>{khodam.nama_khodam}</strong> - {khodam.deskripsi} = {""}
            {khodam.akan_muncul}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TambahKhodam;
