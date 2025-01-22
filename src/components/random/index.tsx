"use client";
import { useState, useRef } from "react";
import khodamIndonesia from "../data/khodam.ts";
import { Button, Card, Row, Col, Flex, Space } from "antd";

function Index() {
  const [khodam, setKhodam] = useState<{
    nama_khodam: string;
    deskripsi: string;
    akan_muncul: string;
  } | null>(null);
  const [nama, setNama] = useState("");
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  function showRandom() {
    const random =
      khodamIndonesia[Math.floor(Math.random() * khodamIndonesia.length)];
    setTimeout(() => {
      setKhodam(random);
      setLoading(false);
    }, 1000);

    if (nameInputRef.current) {
      const nameValue = nameInputRef.current.value;
      if (nameValue) {
        setKhodam(random);
      } else {
        alert("Masukan Nama Dulu...");
      }
      setNama(nameValue);
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20PX" }}>
      <h1 style={{ marginBottom: "20px", fontSize: "2rem" }}>
        Cek Khodam Anda!!!
      </h1>
      <p style={{ marginBottom: "20px", fontSize: "1.2rem" }}>
        Ketikan Nama Untuk Melihat Khodam
      </p>
      <Space style={{ marginBottom: "20px" }} direction="vertical" size="large">
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          placeholder="Masukan Nama"
          style={{ padding: "10px", borderRadius: "8px", width: "300px" }}
        />

        <Button
          onClick={showRandom}
          color="pink"
          variant="solid"
          style={{
            cursor: "pointer",
          }}
        >
          cek Sekarang
        </Button>
      </Space>

      {nama !== "" && khodam && (
        <Flex gap="middle" align="center" vertical>
          <Row gutter={16}>
            <Col span={8}>
              <Card
                style={{ width: 400, borderRadius: "12px" }}
                loading={loading}
              >
                <p style={{ fontSize: "20px" }}>
                  Haii <strong> {nama} </strong> Khodam Kamu adalah
                </p>
                <p>
                  Khodam : <strong>{khodam.nama_khodam}</strong>
                </p>
                <p>
                  Deskripsi : <strong>{khodam.deskripsi}</strong>
                </p>
                <p>
                  Akan Muncul : <strong>{khodam.akan_muncul}</strong>
                </p>
              </Card>
            </Col>
          </Row>
        </Flex>
      )}
    </div>
  );
}

export default Index;
